const products = [
	{
		title: 'Beta Glucan 100+',
		image:
			'https://cdn.shopify.com/s/files/1/1628/0741/products/BetaGlucan100_Front1024x1024.png?v=1711971234',
		link: '/products/beta-glucan-plus',
		price: 49.95,
	},
	{
		title: 'Beta Glucan 100',
		image:
			'https://cdn.shopify.com/s/files/1/1628/0741/products/BetaGlucan100Front1024x1024.png?v=1633360714',
		link: '/products/beta-glucan-100',
		price: 39.95,
	},
	{
		title: 'Beta Glucan Replenishment Cream',
		image:
			'https://cdn.shopify.com/s/files/1/1628/0741/products/BetaGlucanReplenishmentCreamFront1024x1024.png?v=1711971279',
		link: '/products/beta-glucan-cream',
		price: 159.94,
	},
	{
		title: 'Vitamin D3',
		image:
			'https://cdn.shopify.com/s/files/1/1628/0741/files/VitaminD3Front1024x1024_5ba2cca0-6c7d-4d04-8c89-3a8375240cc5.png?v=1711971322',
		link: '/products/vitamin-d-3',
		price: 12.95,
	},
	{
		title: 'Beta Glucan 500',
		image:
			'https://cdn.shopify.com/s/files/1/1628/0741/products/BetaGlucan500Front1024x1024.png?v=1711971252',
		link: '/products/beta-glucan',
		price: 99.99,
	},
	{
		title: 'Immune Ready™ Kids Gummies',
		image:
			'https://cdn.shopify.com/s/files/1/1628/0741/files/Amazon_ImmuneReady_Pouch-and-stick.png?v=1730837410',
		link: '/products/immune-ready-kids',
		price: 32.95,
	},
	{
		title: 'Immune Ready™ Drink Mix',
		image:
			'https://cdn.shopify.com/s/files/1/1628/0741/products/BetaGlucan500Front1024x1024.png?v=1711971252',
		link: '/products/immune-ready-drink-mix',
		price: 32.95,
	},
	{
		title: 'Curcumin Extra Strength',
		image:
			'https://cdn.shopify.com/s/files/1/1628/0741/products/CurcuminESFront1024x1024.png?v=1711971295',
		link: '/products/curcumin',
		price: 32.95,
	},
	{
		title: 'Curcumin Plus',
		image:
			'https://cdn.shopify.com/s/files/1/1628/0741/files/CurcuminPlusFront1024x1024.png?v=1721345562',
		link: '/products/curcumin-plus',
		price: 64.95,
	}
];

const style = `
<style>
.new-elm-cus-pur * {
    margin: 0;
    padding: 0;
}
.new-elm-cus-pur {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 20px;
}
.new-elm-cus-pur-products-wrapper {
    width: 100%;
    overflow-x: auto;
}
   
.new-elm-cus-pur-products-wrapper::-webkit-scrollbar {
  display: none;
}

.new-elm-cus-pur-products-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.new-elm-cus-pur-products {
    display: grid;
    grid-template-columns: repeat(4, 24%);
    gap: 12px;
    padding: 0 6px;
    margin-top: 5px;
    margin-bottom: 5px;
}
.new-elm-cus-pur-product {
    display: grid;
    text-align: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 12px;
    border-radius: 12px;
    align-content: space-around;
}
.new-elm-cus-pur-product-link {
    width: 100%;
    padding: 4px;
    font-size: 14px;
    margin-top: 14px;
}
.new-elm-cus-pur-product-title {
    font-size: 14px;
    line-height: 20px;
    text-align: center;
}
.new-elm-cus-pur-product-price {
    line-height: 27px;
}
img.new-elm-cus-pur-product-image {
    width:100%;
}
@media (max-width: 1024px) {
    .new-elm-cus-pur-products {
		display: grid;
		grid-template-columns: repeat(4, 23.5%);
		gap: 12px;
		padding: 0 6px;
		margin-top: 5px;
		margin-bottom: 5px;
	}
}
@media only screen and (max-width: 812px) {
	.new-elm-cus-pur-products {
		display: grid;
		grid-template-columns: repeat(4, 23%);
		gap: 12px;
		padding: 0 6px;
		margin-top: 5px;
		margin-bottom: 5px;
	}
}
@media (max-width: 667px) {
    .new-elm-cus-pur-products {
		display: grid;
		grid-template-columns: repeat(1, 100%);
		gap: 12px;
		padding: 0 6px;
		margin-top: 5px;
		margin-bottom: 5px;
	}
    .new-elm-cus-pur-title{
        font-size: 26px;
        line-height: 34px;
        text-align: center;
    }
    .new-elm-cus-pur-product-title {
        font-size: 12px;
        line-height: 20px;
        text-align: center;
    }
    .new-elm-cus-pur-product-link {
        width: 100%;
        padding: 4px;
        font-size: 12px;
        margin-top: 14px;
    }
}
</style>
`;

const product_html = (product) => `
<div href="${product.link}" class="new-elm-cus-pur-product">
    <img src="${product.image}" alt="${product.title}" class="new-elm-cus-pur-product-image">
    <h3 class="new-elm-cus-pur-product-title">${product.title}</h3>
    <p class="new-elm-cus-pur-product-price accent">$${product.price}</p>
    <a href="${product.link}" class="btn btn-lightblue flex-fill new-elm-cus-pur-product-link">SHOP NOW</a>
</div>
`;

var b=products.length-4;
var x=Math.floor(Math.random() * (b - 0) ) + 0;
console.log(x);
var y=x+4;
console.log(y);

const new_elm_html = `
<div class="container1">
    <div class="new-elm-cus-pur">
        <h2 class="new-elm-cus-pur-title">Customers Also Purchase</h2>
        <div class="new-elm-cus-pur-products-wrapper">
            <div class="new-elm-cus-pur-products">
                <!-- $//{products.map(product_html).join('')}  --> 
				
				${products.slice(x,y).map(product_html).join('')}
            </div>
        </div>
    </div>
</div>
`;

const styleInterval = setInterval(() => {
	try {
		const head = document.querySelector('head');
		if (head) {
			head.insertAdjacentHTML('beforeend', style);
			clearInterval(styleInterval);
		}
	} catch (error) {
		console.error('A/B test style error', error);
	}
}, 10);

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('.others');
		if (exist_elm && !document.querySelector('.new-elm-cus-pur')) {
			exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
			clearInterval(interval);
		}
	} catch (error) {
		console.error('A/B test js error', error);
	}
}, 10);
