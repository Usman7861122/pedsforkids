# Deploy to AWS S3 from GitHub

Every push to `main` builds the site and uploads `dist/` to the S3 bucket `pedsforkids-website`.
This uses GitHub OIDC, so there are no AWS access keys stored in GitHub.

## One-time setup in AWS

1. **Bucket**: `pedsforkids-website` (note its region, for example `us-east-1`).
2. **OIDC provider** (IAM > Identity providers > Add provider, skip if it exists):
   - Type: OpenID Connect
   - Provider URL: `https://token.actions.githubusercontent.com`
   - Audience: `sts.amazonaws.com`
3. **IAM role** for GitHub (IAM > Roles > Create role > Web identity):
   - Identity provider: `token.actions.githubusercontent.com`, audience `sts.amazonaws.com`
   - Trust policy condition (limits it to this repo and branch):
     ```json
     {
       "Version": "2012-10-17",
       "Statement": [{
         "Effect": "Allow",
         "Principal": { "Federated": "arn:aws:iam::<ACCOUNT_ID>:oidc-provider/token.actions.githubusercontent.com" },
         "Action": "sts:AssumeRoleWithWebIdentity",
         "Condition": {
           "StringEquals": { "token.actions.githubusercontent.com:aud": "sts.amazonaws.com" },
           "StringLike": { "token.actions.githubusercontent.com:sub": "repo:Usman7861122/pedsforkids:ref:refs/heads/main" }
         }
       }]
     }
     ```
   - Permissions policy for the role:
     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         { "Effect": "Allow", "Action": ["s3:ListBucket"], "Resource": "arn:aws:s3:::pedsforkids-website" },
         { "Effect": "Allow", "Action": ["s3:PutObject", "s3:DeleteObject", "s3:GetObject"], "Resource": "arn:aws:s3:::pedsforkids-website/*" }
       ]
     }
     ```
     If you use CloudFront, also allow `cloudfront:CreateInvalidation` on your distribution.

## One-time setup in GitHub

Repo > Settings > Secrets and variables > Actions:

- **Secret** `AWS_ROLE_ARN` = the ARN of the role from step 3
- **Variable** `AWS_REGION` = the bucket region, for example `us-east-1`
- **Variable** `CLOUDFRONT_DISTRIBUTION_ID` = only if you use CloudFront

## Showing the site to visitors

- **Best: CloudFront in front of the bucket.** It gives HTTPS and a custom domain. Use the bucket's
  *website endpoint* as the origin (not the plain REST endpoint), so `/services/` finds `index.html`.
- **Quick test: S3 static website hosting.** Bucket > Properties > Static website hosting: on, index
  document `index.html`, error document `404.html`. This is HTTP only. Visitors can only read the files if
  you also allow public reads (Block Public Access off for the bucket, plus a `s3:GetObject` bucket policy).
  Prefer CloudFront with Origin Access Control instead of making the bucket public.

## Run it

Push to `main`, or GitHub > Actions > Deploy to S3 > Run workflow.

## Put the workflow in place (one time)

GitHub only runs workflows from `.github/workflows/`. Run this once in Terminal:

```
cd ~/pedsforkids && mkdir -p .github/workflows && git mv docs/deploy-s3.yml .github/workflows/deploy-s3.yml 2>/dev/null || mv docs/deploy-s3.yml .github/workflows/deploy-s3.yml
```
