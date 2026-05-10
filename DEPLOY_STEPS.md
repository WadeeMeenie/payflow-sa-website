# Payflow SA Deployment Steps

1. Create GitHub repository:

```bash
payflow-sa-website
```

2. Initialize git:

```bash
git init
git add .
git commit -m "Initial Payflow SA website"
```

3. Connect GitHub repo:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/payflow-sa-website.git
git push -u origin main
```

4. Deploy:

```bash
npm run deploy
```

5. Configure GitHub Pages:

GitHub Repo
-> Settings
-> Pages
-> Source:
Deploy from branch

Branch:
gh-pages

Folder:
/root

6. Final live URL:

https://YOUR_USERNAME.github.io/payflow-sa-website
