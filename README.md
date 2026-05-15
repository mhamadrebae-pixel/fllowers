# Personal Profile Website

A lightweight personal profile page built with plain HTML, CSS, and vanilla JavaScript. It is mobile-first, RTL-ready, and suitable for GitHub Pages.

## Files

- `index.html` contains the page structure and your editable personal information.
- `style.css` contains the full design, color system, layout, and responsive styles.
- `script.js` contains the theme toggle, copy phone feature, toast, and image fallback behavior.
- `assets/profile.jpg` is your profile image.
- `assets/favicon.png` is the browser tab icon.

## Edit your personal information

Open `index.html` and look for these comments:

- `Personal data: update name, title, and bio here.`
- `Contact data: update phone, email, and location here.`
- `Social links: replace each href with your own profile URL.`

You can update:

- Name
- Professional title
- Short bio
- Phone number
- WhatsApp link
- Email
- Location
- Social profile links
- Footer text if needed

## Replace the profile image

1. Put your photo inside `assets/`.
2. Rename it to `profile.jpg`, or update the image path in `index.html`.
3. Compress the image before uploading so the site stays fast on mobile and GitHub Pages.

## Change the favicon

Replace `assets/favicon.png` with your own square PNG file. A size like `64x64` or `128x128` works well.

## Change colors

Open `style.css` and edit the variables inside:

- `:root` for the default dark theme
- `html[data-theme="light"]` for the light theme

The easiest values to customize are:

- `--bg`
- `--bg-alt`
- `--surface`
- `--text`
- `--muted`
- `--accent`
- `--accent-strong`

## Enable or disable light mode

The theme toggle is already enabled by default.

- To keep both themes, do nothing.
- To disable light mode, remove the theme toggle button from `index.html` and the theme code from `script.js`.
- If you want only dark mode, you can also remove the `html[data-theme="light"]` block from `style.css`.

## Deploy on GitHub Pages

1. Create a GitHub repository and upload these files.
2. Push the project to the default branch, usually `main`.
3. In GitHub, open `Settings` > `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select your branch and root folder, then save.
6. Wait a minute and GitHub Pages will give you your public site link.

## Notes

- The page is RTL by default with `lang="ku"` and `dir="rtl"` in `index.html`.
- If you later want English, you can change those attributes and replace the visible text labels.
- The selected theme is saved in `localStorage`, so visitors keep their preferred mode.
