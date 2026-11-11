# Proposed 301 redirects — NOT deployed. Waiting for your approval.

| Old URL | New URL |
|---|---|
| /contactus, /contact-us | /contact/ |
| /about-us | /about/ |
| /home, /index.html | / |
| /home-2, /home-2/ | / |

Send us the full old-URL list (from Search Console "Not found" and old mdpeds.com / peds4kids.com paths) and we add each to its closest page.

After you approve, add to the HTTPS server block in nginx (one `location = ... { return 301 ...; }` each), for example:

    location = /contactus  { return 301 /contact/; }
    location = /contact-us { return 301 /contact/; }
    location = /about-us   { return 301 /about/; }
    location = /home       { return 301 /; }
    location = /index.html { return 301 /; }
    location ~ ^/home-2/?$ { return 301 /; }
