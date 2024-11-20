This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
├─ src
│  ├─ Components
│  │  ├─ CategoryPage
│  │  │  └─ PreviewProductCard.js
│  │  ├─ Checkout
│  │  │  ├─ OrderForm.js
│  │  │  ├─ RadioInput.js
│  │  │  ├─ SuccessMessage.js
│  │  │  ├─ Summary.js
│  │  │  └─ TextInput.js
│  │  ├─ Footer
│  │  │  ├─ Footer.js
│  │  │  └─ Socials.js
│  │  ├─ General
│  │  │  ├─ About.js
│  │  │  ├─ CategoryPreviewLinks.js
│  │  │  ├─ DefaultError.js
│  │  │  ├─ GoBack.js
│  │  │  ├─ LinkButton.js
│  │  │  ├─ LinkList.js
│  │  │  ├─ Modal.js
│  │  │  ├─ ProductCount.js
│  │  │  └─ ResponsiveStaticImage.js
│  │  ├─ Header
│  │  │  ├─ BurgerMenu.js
│  │  │  ├─ Cart.js
│  │  │  ├─ CartItem.js
│  │  │  ├─ DesktopNavigation.js
│  │  │  ├─ Header.js
│  │  │  └─ MobileNavigation.js
│  │  ├─ HomePage
│  │  │  ├─ Hero.js
│  │  │  ├─ PrimaryPreview.js
│  │  │  ├─ SecondaryPreview.js
│  │  │  └─ TertiaryPreview.js
│  │  └─ ProductPage
│  │     ├─ AddToCart.js
│  │     ├─ DetailsProductCard.js
│  │     ├─ ProductGallery.js
│  │     └─ ProductsPreview.js
│  ├─ Hooks
│  │  └─ useClientWidth.js
│  ├─ app
│  │  ├─ [category]
│  │  │  ├─ [product]
│  │  │  │  └─ page.js
│  │  │  ├─ error.js
│  │  │  ├─ layout.js
│  │  │  └─ page.js
│  │  ├─ checkout
│  │  │  └─ page.js
│  │  ├─ globals.css
│  │  ├─ layout.js
│  │  ├─ not-found.js
│  │  └─ page.js
│  ├─ assets
│  │  ├─ images
│  │  │  ├─ cart
│  │  │  │  ├─ image-xx59-headphones.jpg
│  │  │  │  ├─ image-xx99-mark-one-headphones.jpg
│  │  │  │  ├─ image-xx99-mark-two-headphones.jpg
│  │  │  │  ├─ image-yx1-earphones.jpg
│  │  │  │  ├─ image-zx7-speaker.jpg
│  │  │  │  └─ image-zx9-speaker.jpg
│  │  │  ├─ home
│  │  │  │  ├─ desktop
│  │  │  │  │  ├─ Hero.jpg
│  │  │  │  │  ├─ image-earphones-yx1.jpg
│  │  │  │  │  ├─ image-hero.jpg
│  │  │  │  │  ├─ image-speaker-zx7.jpg
│  │  │  │  │  └─ image-speaker-zx9.png
│  │  │  │  ├─ mobile
│  │  │  │  │  ├─ image-earphones-yx1.jpg
│  │  │  │  │  ├─ image-hero.jpg
│  │  │  │  │  ├─ image-speaker-zx7.jpg
│  │  │  │  │  └─ image-speaker-zx9.png
│  │  │  │  └─ tablet
│  │  │  │     ├─ image-earphones-yx1.jpg
│  │  │  │     ├─ image-hero.jpg
│  │  │  │     ├─ image-speaker-zx7.jpg
│  │  │  │     └─ image-speaker-zx9.png
│  │  │  ├─ product-xx59-headphones
│  │  │  │  ├─ desktop
│  │  │  │  │  ├─ image-category-page-preview.jpg
│  │  │  │  │  ├─ image-gallery-1.jpg
│  │  │  │  │  ├─ image-gallery-2.jpg
│  │  │  │  │  ├─ image-gallery-3.jpg
│  │  │  │  │  └─ image-product.jpg
│  │  │  │  ├─ mobile
│  │  │  │  │  ├─ image-category-page-preview.jpg
│  │  │  │  │  ├─ image-gallery-1.jpg
│  │  │  │  │  ├─ image-gallery-2.jpg
│  │  │  │  │  ├─ image-gallery-3.jpg
│  │  │  │  │  └─ image-product.jpg
│  │  │  │  └─ tablet
│  │  │  │     ├─ image-category-page-preview.jpg
│  │  │  │     ├─ image-gallery-1.jpg
│  │  │  │     ├─ image-gallery-2.jpg
│  │  │  │     ├─ image-gallery-3.jpg
│  │  │  │     └─ image-product.jpg
│  │  │  ├─ product-xx99-mark-one-headphones
│  │  │  │  ├─ desktop
│  │  │  │  │  ├─ image-category-page-preview.jpg
│  │  │  │  │  ├─ image-gallery-1.jpg
│  │  │  │  │  ├─ image-gallery-2.jpg
│  │  │  │  │  ├─ image-gallery-3.jpg
│  │  │  │  │  └─ image-product.jpg
│  │  │  │  ├─ mobile
│  │  │  │  │  ├─ image-category-page-preview.jpg
│  │  │  │  │  ├─ image-gallery-1.jpg
│  │  │  │  │  ├─ image-gallery-2.jpg
│  │  │  │  │  ├─ image-gallery-3.jpg
│  │  │  │  │  └─ image-product.jpg
│  │  │  │  └─ tablet
│  │  │  │     ├─ image-category-page-preview.jpg
│  │  │  │     ├─ image-gallery-1.jpg
│  │  │  │     ├─ image-gallery-2.jpg
│  │  │  │     ├─ image-gallery-3.jpg
│  │  │  │     └─ image-product.jpg
│  │  │  ├─ product-xx99-mark-two-headphones
│  │  │  │  ├─ desktop
│  │  │  │  │  ├─ image-category-page-preview.jpg
│  │  │  │  │  ├─ image-gallery-1.jpg
│  │  │  │  │  ├─ image-gallery-2.jpg
│  │  │  │  │  ├─ image-gallery-3.jpg
│  │  │  │  │  └─ image-product.jpg
│  │  │  │  ├─ mobile
│  │  │  │  │  ├─ image-category-page-preview.jpg
│  │  │  │  │  ├─ image-gallery-1.jpg
│  │  │  │  │  ├─ image-gallery-2.jpg
│  │  │  │  │  ├─ image-gallery-3.jpg
│  │  │  │  │  └─ image-product.jpg
│  │  │  │  └─ tablet
│  │  │  │     ├─ image-category-page-preview.jpg
│  │  │  │     ├─ image-gallery-1.jpg
│  │  │  │     ├─ image-gallery-2.jpg
│  │  │  │     ├─ image-gallery-3.jpg
│  │  │  │     └─ image-product.jpg
│  │  │  ├─ product-yx1-earphones
│  │  │  │  ├─ desktop
│  │  │  │  │  ├─ image-category-page-preview.jpg
│  │  │  │  │  ├─ image-gallery-1.jpg
│  │  │  │  │  ├─ image-gallery-2.jpg
│  │  │  │  │  ├─ image-gallery-3.jpg
│  │  │  │  │  └─ image-product.jpg
│  │  │  │  ├─ mobile
│  │  │  │  │  ├─ image-category-page-preview.jpg
│  │  │  │  │  ├─ image-gallery-1.jpg
│  │  │  │  │  ├─ image-gallery-2.jpg
│  │  │  │  │  ├─ image-gallery-3.jpg
│  │  │  │  │  └─ image-product.jpg
│  │  │  │  └─ tablet
│  │  │  │     ├─ image-category-page-preview.jpg
│  │  │  │     ├─ image-gallery-1.jpg
│  │  │  │     ├─ image-gallery-2.jpg
│  │  │  │     ├─ image-gallery-3.jpg
│  │  │  │     └─ image-product.jpg
│  │  │  ├─ product-zx7-speaker
│  │  │  │  ├─ desktop
│  │  │  │  │  ├─ image-category-page-preview.jpg
│  │  │  │  │  ├─ image-gallery-1.jpg
│  │  │  │  │  ├─ image-gallery-2.jpg
│  │  │  │  │  ├─ image-gallery-3.jpg
│  │  │  │  │  └─ image-product.jpg
│  │  │  │  ├─ mobile
│  │  │  │  │  ├─ image-category-page-preview.jpg
│  │  │  │  │  ├─ image-gallery-1.jpg
│  │  │  │  │  ├─ image-gallery-2.jpg
│  │  │  │  │  ├─ image-gallery-3.jpg
│  │  │  │  │  └─ image-product.jpg
│  │  │  │  └─ tablet
│  │  │  │     ├─ image-category-page-preview.jpg
│  │  │  │     ├─ image-gallery-1.jpg
│  │  │  │     ├─ image-gallery-2.jpg
│  │  │  │     ├─ image-gallery-3.jpg
│  │  │  │     └─ image-product.jpg
│  │  │  ├─ product-zx9-speaker
│  │  │  │  ├─ desktop
│  │  │  │  │  ├─ image-category-page-preview.jpg
│  │  │  │  │  ├─ image-gallery-1.jpg
│  │  │  │  │  ├─ image-gallery-2.jpg
│  │  │  │  │  ├─ image-gallery-3.jpg
│  │  │  │  │  └─ image-product.jpg
│  │  │  │  ├─ mobile
│  │  │  │  │  ├─ image-category-page-preview.jpg
│  │  │  │  │  ├─ image-gallery-1.jpg
│  │  │  │  │  ├─ image-gallery-2.jpg
│  │  │  │  │  ├─ image-gallery-3.jpg
│  │  │  │  │  └─ image-product.jpg
│  │  │  │  └─ tablet
│  │  │  │     ├─ image-category-page-preview.jpg
│  │  │  │     ├─ image-gallery-1.jpg
│  │  │  │     ├─ image-gallery-2.jpg
│  │  │  │     ├─ image-gallery-3.jpg
│  │  │  │     └─ image-product.jpg
│  │  │  └─ shared
│  │  │     ├─ desktop
│  │  │     │  ├─ image-best-gear.jpg
│  │  │     │  ├─ image-category-thumbnail-earphones.png
│  │  │     │  ├─ image-category-thumbnail-headphones.png
│  │  │     │  ├─ image-category-thumbnail-speakers.png
│  │  │     │  ├─ image-xx59-headphones.jpg
│  │  │     │  ├─ image-xx99-mark-one-headphones.jpg
│  │  │     │  ├─ image-xx99-mark-two-headphones.jpg
│  │  │     │  ├─ image-zx7-speaker.jpg
│  │  │     │  └─ image-zx9-speaker.jpg
│  │  │     ├─ mobile
│  │  │     │  ├─ image-best-gear.jpg
│  │  │     │  ├─ image-xx59-headphones.jpg
│  │  │     │  ├─ image-xx99-mark-one-headphones.jpg
│  │  │     │  ├─ image-xx99-mark-two-headphones.jpg
│  │  │     │  ├─ image-zx7-speaker.jpg
│  │  │     │  └─ image-zx9-speaker.jpg
│  │  │     └─ tablet
│  │  │        ├─ image-best-gear.jpg
│  │  │        ├─ image-xx59-headphones.jpg
│  │  │        ├─ image-xx99-mark-one-headphones.jpg
│  │  │        ├─ image-xx99-mark-two-headphones.jpg
│  │  │        ├─ image-zx7-speaker.jpg
│  │  │        └─ image-zx9-speaker.jpg
│  │  └─ svgs
│  │     ├─ alert-circle-outline.svg
│  │     ├─ icon-arrow-right.svg
│  │     ├─ icon-cart.svg
│  │     ├─ icon-cash-on-delivery.svg
│  │     ├─ icon-facebook.svg
│  │     ├─ icon-hamburger.svg
│  │     ├─ icon-instagram.svg
│  │     ├─ icon-order-confirmation.svg
│  │     ├─ icon-twitter.svg
│  │     ├─ logo.svg
│  │     ├─ pattern-circles.svg
│  │     └─ spinner.svg
│  ├─ lib
│  │  ├─ cartImages.js
│  │  ├─ checkoutFormData.js
│  │  └─ data.js
│  ├─ registries
│  │  └─ styledJSXRegistry.js
│  └─ utils
└─ tailwind.config.js

```
