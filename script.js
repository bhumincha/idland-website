# ID LAND Bangkok Agent Website

Static one-page website for GitHub Pages.

## Deploy on GitHub Pages

1. Create a new public GitHub repository, for example `idland-website`.
2. Upload all files in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Select:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Save.
6. Open the GitHub Pages URL that GitHub provides.

## Custom domain

In **Settings → Pages → Custom domain**, add:

```text
www.idl.run
```

Then create this DNS record with your domain provider:

```text
Type: CNAME
Name: www
Value: <your-github-username>.github.io
```

For the root domain `idl.run`, use your DNS provider or Cloudflare redirect rule to redirect to:

```text
https://www.idl.run
```

## Production note

The contact form uses `mailto:` because GitHub Pages is static hosting. For real lead capture, connect Formspree, Basin, Google Forms, or another form backend.
