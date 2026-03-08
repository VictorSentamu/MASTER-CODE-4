// ============================================
// REACT SHOPPING CART & WISHLIST COMPONENTS
// ============================================

const { useState, useEffect, useRef } = React;

/* ============================================
   REACT WISHLIST COMPONENT
   ============================================ */
   function WishlistReact() {
    const [wishlist, setWishlist] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // 1. Load from LocalStorage
    useEffect(() => {
        const saved = localStorage.getItem('nextLaptops_wishlist');
        if (saved) {
            try {
                setWishlist(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse wishlist", e);
            }
        }
    }, []);

    // 2. Save to LocalStorage & Global Bridge
    useEffect(() => {
        localStorage.setItem('nextLaptops_wishlist', JSON.stringify(wishlist));
        
        // Expose to global window so Vanilla JS buttons can call it
        window.reactWishlist = {
            toggle: (product) => toggleItem(product),
            isOpen: isOpen
        };
    }, [wishlist, isOpen]);

  // 3. Trigger Animation when wishlist length changes
useEffect(() => {
    if (wishlist.length > 0) {
        setIsAnimating(true);
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 400);
        return () => clearTimeout(timer);
    }
}, [wishlist.length]);



    // Action: Toggle Item
    const toggleItem = (product) => {
        setWishlist(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.filter(item => item.id !== product.id);
            } else {
                return [...prev, product];
            }
        });
    };

    // Action: Remove Item
    const removeItem = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };

    // Action: Move to Cart
    const moveToCart = (product) => {
        if (window.reactCart) {
            window.reactCart.addItem(product);
            removeItem(product.id);
            setIsOpen(false); // Close wishlist
        }
    };

    // --- RENDERERS ---

    // 1. The Closed Wishlist Icon
if (!isOpen) {
    return (
        <button 
            className="header-icon-btn"
            onClick={() => setIsOpen(true)}
            title="View Wishlist"
            aria-label="View Wishlist"
        >
            <i className="fas fa-heart"></i>
            {wishlist.length > 0 && (
                <span 
                    className={`icon-badge wishlist-badge ${isAnimating ? 'animate-pop' : 'show'}`}
                >
                    {wishlist.length}
                </span>
            )}
        </button>
    );
}



    // 2. The Open Modal
    return (
        <div className={`wishlist-popup-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            <div 
                className="wishlist-modal-content" 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ margin: 0, fontFamily: 'var(--title-font)', fontSize: '1.5rem' }}>
                        My Wishlist ({wishlist.length})
                    </h2>
                    <button 
                        onClick={() => setIsOpen(false)}
                        style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#666' }}
                        >
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                {/* Body */}
                <div style={{ padding: '20px', overflowY: 'auto', flex: 1 }}>
                    {wishlist.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '40px 0' }}>
                            <i className="far fa-heart" style={{ fontSize: '3rem', color: '#ddd', marginBottom: '10px' }}></i>
                            <p style={{ color: '#666' }}>Your wishlist is empty.</p>
                            <button 
                                className="btn btn-primary" 
                                style={{ marginTop: '20px' }}
                                onClick={() => setIsOpen(false)}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        wishlist.map((item) => (
                            <div key={item.id} style={{ 
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                                marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #f5f5f5' 
                            }}>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1rem' }}>{item.name}</h4>
                                    <div style={{ fontSize: '0.9rem', color: '#666' }}>
                                        UGX {item.price.toLocaleString()}
                                    </div>
                                </div>
                                
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    {/* Move to Cart Button */}
                                    <button 
                                        onClick={() => moveToCart(item)}
                                        style={{ 
                                            background: 'var(--primary-color)', color: 'white', border: 'none', 
                                            padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem'
                                        }}
                                        title="Move to Cart"
                                    >
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                    
                                    {/* Remove Button */}
                                    <button 
                                        onClick={() => removeItem(item.id)}
                                        style={{ 
                                            background: 'none', border: '1px solid #ddd', color: '#666', 
                                            padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem'
                                        }}
                                        title="Remove from Wishlist"
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

/* ============================================
   REACT SHOPPING CART COMPONENT
   ============================================ */
function ShoppingCartReact() {
    // 1. State
    const [items, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // 2. Load Cart from LocalStorage on Mount
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('nextLaptops_cart');
            if (savedCart) {
                setItems(JSON.parse(savedCart));
            }
        } catch (e) {
            console.warn("Cart load failed:", e);
        }
    }, []);

    // 3. Save to LocalStorage whenever items change
    useEffect(() => {
        try {
            localStorage.setItem('nextLaptops_cart', JSON.stringify(items));
        } catch (e) {
            console.warn("Localstorage full");
        }
    }, [items]);

    // 4. Bridge: Expose functions to Vanilla JS
    useEffect(() => {
        // This is the critical "Bridge" window object
        window.reactCart = {
            addItem: (product) => {
                handleAddItem(product);
            },
            open: () => setIsOpen(true),
            itemCount: items.length // Allow vanilla JS to read count if needed
        };
        
        return () => {
            delete window.reactCart; // Cleanup
        };
    }, [items]); // Re-run whenever items change

    // Logic: Add Item
    const handleAddItem = (product) => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 400); // Reset animation class

        setItems(prevItems => {
            const existingIndex = prevItems.findIndex(item => item.id === product.id);
            
            if (existingIndex > -1) {
                // Update quantity
                const newItems = [...prevItems];
                newItems[existingIndex].quantity += 1;
                return newItems;
            } else {
                // Add new item
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Logic: Remove Item
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    // Logic: Update Quantity
    const updateQuantity = (id, change) => {
        setItems(items.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + change);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    // Calculations
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // WhatsApp Link Generator
    const whatsappLink = () => {
        if (items.length === 0) return '#';
        const phone = "256771368136";
        const message = items.map((item, i) => 
            `${i+1}. ${item.name} x${item.quantity} - UGX ${(item.price * item.quantity).toLocaleString()}`
        ).join('\n');
        return `https://wa.me/${phone}?text=${encodeURIComponent("Hi Next Laptops, I want to order:\n" + message + `\n*Total: UGX ${totalPrice.toLocaleString()}*`)}`;
    };

    // --- RENDERERS ---

    // 1. The Closed Cart Icon
    if (!isOpen) {
        return (
            <button 
                className="header-icon-btn"
                onClick={() => setIsOpen(true)}
                style={{ 
                    background: 'none', border: 'none', color: 'white', fontSize: '1.2rem', 
                    cursor: 'pointer', position: 'relative', outline: 'none' 
                }}
            >
                <i className="fas fa-shopping-cart"></i>
                {totalItems > 0 && (
                    <span 
                        style={{
                            position: 'absolute', top: '-8px', right: '-8px',
                            background: 'var(--accent-color)', color: 'white', borderRadius: '50%',
                            width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '0.7rem', fontWeight: 'bold', pointerEvents: 'none'
                        }}
                        className={isAnimating ? 'cart-badge-pulse' : ''}
                    >
                        {totalItems}
                    </span>
                )}
            </button>
        );
    }

    // 2. The Open Modal
    return (
        <div className="cart-modal-overlay active" onClick={() => setIsOpen(false)}>
            <div 
                className={`modal-content cart-modal-enter`} 
                onClick={(e) => e.stopPropagation()}
                style={{ 
                    maxWidth: '500px', width: '90%', maxHeight: '80vh', 
                    display: 'flex', flexDirection: 'column' 
                }}
            >
                {/* Modal Header */}
                <div style={{ 
                    padding: '20px', borderBottom: '1px solid #eee', 
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
                }}>
                    <h2 style={{ margin: 0, fontFamily: 'var(--title-font)', fontSize: '1.5rem' }}>
                        Your Cart ({totalItems})
                    </h2>
                    <button 
                        onClick={() => setIsOpen(false)}
                        style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#666' }}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                {/* Modal Body (Items) */}
                <div style={{ padding: '20px', overflowY: 'auto', flex: 1 }}>
                    {items.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '40px 0' }}>
                            <i className="fas fa-shopping-basket" style={{ fontSize: '3rem', color: '#ddd', marginBottom: '10px' }}></i>
                            <p style={{ color: '#666' }}>Your cart is empty.</p>
                            <button 
                                className="btn btn-primary" 
                                style={{ marginTop: '20px' }}
                                onClick={() => setIsOpen(false)}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} style={{ 
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                                marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #f5f5f5' 
                            }}>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1rem' }}>{item.name}</h4>
                                    <div style={{ fontSize: '0.9rem', color: '#666' }}>
                                        UGX {item.price.toLocaleString()}
                                    </div>
                                </div>
                                
                                {/* Quantity Controls */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f0f0f0', borderRadius: '20px', padding: '2px 8px' }}>
                                    <button onClick={() => updateQuantity(item.id, -1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666', fontSize: '1.1rem' }}>-</button>
                                    <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: '600' }}>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary-color)', fontSize: '1.1rem' }}>+</button>
                                </div>

                                {/* Price & Delete */}
                                <div style={{ textAlign: 'right', minWidth: '80px' }}>
                                    <div style={{ fontWeight: '700', color: 'var(--primary-color)' }}>
                                        UGX {(item.price * item.quantity).toLocaleString()}
                                    </div>
                                    <button onClick={() => removeItem(item.id)} style={{ 
                                        background: 'none', border: 'none', color: '#ff4444', fontSize: '0.8rem', cursor: 'pointer', marginTop: '4px' 
                                    }}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Modal Footer (Checkout) */}
                {items.length > 0 && (
                    <div style={{ padding: '20px', borderTop: '2px solid #eee', background: '#fafafa' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '1.2rem', fontWeight: '700' }}>
                            <span>Total:</span>
                            <span style={{ color: 'var(--accent-color)' }}>UGX {totalPrice.toLocaleString()}</span>
                        </div>
                        <a 
                            href={whatsappLink()} 
                            className="btn btn-primary" 
                            target="_blank" rel="noopener noreferrer"
                            style={{ 
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', 
                                padding: '15px', fontSize: '1.1rem', borderRadius: '8px' 
                            }}
                        >
                            <i className="fab fa-whatsapp"></i>
                            Checkout on WhatsApp
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

// ============================================
// MOUNT REACT APP
// ============================================

// 1. Mount Wishlist First
const wishlistRoot = ReactDOM.createRoot(document.getElementById('react-wishlist-root'));
wishlistRoot.render(<WishlistReact />);

// 2. Mount Cart Second
const cartRoot = ReactDOM.createRoot(document.getElementById('react-cart-root'));
cartRoot.render(<ShoppingCartReact />);
