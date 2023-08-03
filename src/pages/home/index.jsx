import "./style.css";
import { useState, useEffect, useContext } from "react";
import Input from "../../components/input";
import Card from "../../components/products/card";
import Loader from "../../components/loader";
import { useFetch } from "../../hooks/useFetch";
import { API_URLS } from "../../constants/index"
import { useNavigate } from "react-router-dom";
import Slider from "../../components/slider";
import { CartContext } from "../../context/cart-context";
import CategoryItem from "../../components/categories/item";




function Home() {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false);
    const [productFiltered, setProductFiltered] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All')


    const { setProducts, onAddToCart } = useContext(CartContext);

    const { data: products, loading: loadingProducts, error: errorProducts } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);
    const { data: categories, loading: loadingCategories, error: errorCategories } = useFetch(API_URLS.CATEGORIES.url, API_URLS.CATEGORIES.config);

    const filterBySearch = (query) => {
        if (selectedCategory !== 'All' && query.length === 0) {
            onFilter(selectedCategory)
            return;
        }

        let updateProductList = query.length === 0 ? [...products] : [...productFiltered];

        updateProductList = updateProductList.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })

        setProductFiltered(updateProductList);
    }

    const onChange = (e) => {
        const value = e.target.value;
        filterBySearch(value);
    }

    const onFocus = () => {
        setActive(true);
    }
    const onBlur = () => {
        setActive(false);
    }


    useEffect(() => {
        if (products?.length > 0) {
            setProducts(products)
        }
    }, [products, setProducts]);


    const onShowDetails = (id) => {
        navigate(`/products/${id}`)
    }

    const onFilter = (name) => {
        setIsFiltered(true);
        const productsCategory = products.filter((product) => product.category === name);
        setProductFiltered(productsCategory);
        setSelectedCategory(name);
    }

    return (
        <>
            <div className="contentContainer">

                <div className="categoriesContainer">
                    {loadingCategories ? <Loader /> : null}
                    {errorCategories ? <h2>{errorCategories} </h2> : null}

                    <Slider>
                        <CategoryItem onSelectCategory={() => setIsFiltered(false)} type="button" name="All" />
                        {
                            categories.map((category) => (
                                <CategoryItem key={category.id} name={category.name} onSelectCategory={() => onFilter(category.name)} type="button" />
                            ))
                        }
                    </Slider>
                </div>


                <div className="inputContainer">
                    {
                        isFiltered ? (
                            <Input
                                placeholder="Find a product"
                                id="task" required={true}
                                name="Search"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                active={active}>
                            </Input>
                        ) : null
                    }

                </div>

                <h2 className="headerTitleCard">Products</h2>

                <div className="cardContainer">
                    {loadingProducts ? <Loader /> : null}
                    {errorProducts ? <h2>{errorProducts} </h2> : null}


                    {
                        isFiltered ? (
                            productFiltered.map((product) => (
                                <Card key={product.id} {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart}></Card>

                            ))
                        ) : (
                            products.map((product) => (
                                <Card key={product.id} {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart}></Card>
                            ))
                        )
                    }
                    {
                        isFiltered && productFiltered.length === 0 ? <h2>Products not found</h2> : null
                    }
                </div>

            </div>

        </>
    );
}

export default Home;
