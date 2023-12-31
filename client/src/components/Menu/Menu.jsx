import * as menuService from "../../services/menuService";
import { useState, useEffect } from "react";
import MenuItem from "../MenuItem/MenuItem";
import MenuDetailsModal from "../MenuDetailsModal/MenuDetailsModal";

export default function Menu() {

    const [bbqMenus, setBbqMenus] = useState([]);
    const [sideMenus, setSideMenus] = useState([]);
    const [beveragesMenus, setBeveragesMenus] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        menuService.getAllBBQDishes()
            .then(result => setBbqMenus(result))
            .catch(err => console.log(err))
    }, []);
    useEffect(() => {
        menuService.getAllSideDishes()
            .then(result => setSideMenus(result))
            .catch(err => console.log(err))
    }, []);
    useEffect(() => {
        menuService.getAllBeveragesDishes()
            .then(result => setBeveragesMenus(result))
            .catch(err => console.log(err))
    }, []);

    const menuInfoClickHandler = async (menuid) => {
        setSelectedMenu(menuid);
        setShowInfo(true);
    };
    const hideoMenuDetailsModal = () => {
        setShowInfo(false);
    };

    return (
        <>
        {showInfo && (
            <MenuDetailsModal
                onClose={hideoMenuDetailsModal}
                menuid={selectedMenu}                    
            />
        )}
        <div className="bg-2 topOrnament section">
            <div className="inner">
                <div className="container">
                    <h3 className="hdr4">Our tasty meals, have a look!</h3>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="menuBox">
                                <div className="top">
                                    <img
                                        src="./src/assets/flavours/bigsmokebbq/images/content/icon-1.png"
                                        alt=" "
                                    />
                                    <span>Sides</span>
                                </div>
                                <div className="inner">
                                    {sideMenus.map(side => (
                                        <MenuItem
                                            key={side._id}
                                            menuid={side._id}
                                            category={side.month}         
                                            title={side.title}         
                                            price={side.price}
                                            description={side.description}       
                                            imageUrl={side.imageUrl} 
                                            onInfoClick={menuInfoClickHandler}      
                                        />
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="menuBox type3">
                                <div className="top">
                                    <img
                                        src="./src/assets/flavours/bigsmokebbq/images/content/icon-3.png"
                                        alt=" "
                                    />
                                    <span>BBQ Dish</span>
                                </div>
                                <div className="inner">
                                {bbqMenus.map(bbq => (
                                        <MenuItem
                                            key={bbq._id}
                                            menuid={bbq._id}
                                            category={bbq.month}         
                                            title={bbq.title}         
                                            price={bbq.price}
                                            description={bbq.description}       
                                            imageUrl={bbq.imageUrl}
                                            onInfoClick={menuInfoClickHandler}       
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="clearfix visible-sm" />
                        <div className="col-md-4 col-sm-12">
                            <div className="row">
                                <div className="col-md-12 col-sm-6">
                                    <div className="menuBox type4">
                                        <div className="top">
                                            <img
                                                src="./src/assets/flavours/bigsmokebbq/images/content/icon-5.png"
                                                alt=" "
                                            />
                                            <span>Beverages</span>
                                        </div>
                                        <div className="inner">
                                        {beveragesMenus.map(beverage => (
                                        <MenuItem
                                            key={beverage._id}
                                            menuid={beverage._id}
                                            category={beverage.month}         
                                            title={beverage.title}         
                                            price={beverage.price}
                                            description={beverage.description}       
                                            imageUrl={beverage.imageUrl}
                                            onInfoClick={menuInfoClickHandler}       
                                        />
                                    ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="hdr2">Whatever you choose!</h3>
                    <h4 className="hdr3">
                        Be 100% sure that our food is entirely made of biological ingredients
                    </h4>
                </div>
            </div>
        </div>
        </>
    )
}