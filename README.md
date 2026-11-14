# AI4SmartGrids Lab

A static lab website with seven independently addressable pages and a fixed, responsive navigation bar.

## Preview
Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Deploy with GitHub Pages
1. Copy the contents of this folder, including `.nojekyll`, into the root of your repository and push them to its publishing branch.
2. In **Settings → Pages**, select **Deploy from a branch**.
3. Select the publishing branch (for example, `main`) and **/(root)**, then save.
4. Open the resulting URL from **Settings → Pages**.

The site uses relative paths for its assets, so it works under a repository subpath. No build step is required.

Update team profiles in `team.html`, project information in `projects.html`, news in `news.html` and publications in `publications.html`. For Sites hosting, mirror the HTML, CSS, JavaScript and assets in `dist/`. The infrastructure artwork is illustrative.
