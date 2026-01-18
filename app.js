const { useState } = React;

// Iconos SVG
const Camera = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
        <circle cx="12" cy="13" r="3"/>
    </svg>
);

const ShoppingBag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
);

const LogOut = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
        <polyline points="16 17 21 12 16 7"/>
        <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
);

const Eye = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);

const Upload = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
);

const DollarSign = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
);

const FileText = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
    </svg>
);

const Trash2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"/>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        <line x1="10" y1="11" x2="10" y2="17"/>
        <line x1="14" y1="11" x2="14" y2="17"/>
    </svg>
);

const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"/>
    </svg>
);

const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
    </svg>
);

const X = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
);

function TiendaBolsas() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('524338808797');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Bolsa Elegante Rosa',
            description: 'Bolsa de mano elegante con detalles dorados',
            price: '$599',
            images: ['data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23ff69b4" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="white" text-anchor="middle" dy=".3em"%3EBolsa de Ejemplo%3C/text%3E%3C/svg%3E']
        }
    ]);

    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        images: ['', '', '']
    });

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin123') {
            setIsAdmin(true);
            setIsLoggedIn(true);
        } else if (username === 'invitado' && password === 'invitado') {
            setIsAdmin(false);
            setIsLoggedIn(true);
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        setUsername('');
        setPassword('');
    };

    const handleImageUpload = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImages = [...newProduct.images];
                newImages[index] = reader.result;
                setNewProduct({ ...newProduct, images: newImages });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddProduct = () => {
        const validImages = newProduct.images.filter(img => img !== '');
        if (newProduct.name && newProduct.description && newProduct.price && validImages.length > 0) {
            const product = {
                id: products.length + 1,
                ...newProduct,
                images: validImages
            };
            setProducts([...products, product]);
            setNewProduct({ name: '', description: '', price: '', images: ['', '', ''] });
            alert('¡Producto agregado exitosamente!');
        } else {
            alert('Por favor completa todos los campos y sube al menos una imagen');
        }
    };

    const handleDeleteProduct = (productId) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
            setProducts(products.filter(p => p.id !== productId));
        }
    };

    const openImageGallery = (product) => {
        setSelectedProduct(product);
        setCurrentImageIndex(0);
    };

    const closeImageGallery = () => {
        setSelectedProduct(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProduct && currentImageIndex < selectedProduct.images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const handleWhatsAppContact = (product) => {
        const message = `¡Hola! Me interesa la ${product.name}\nPrecio: ${product.price}\n${product.description}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full mb-4">
                            <ShoppingBag />
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            LadyBag
                        </h1>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Usuario
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition"
                                placeholder="Ingresa tu usuario"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition"
                                placeholder="Ingresa tu contraseña"
                                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                            />
                        </div>

                        <button
                            onClick={handleLogin}
                            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition shadow-lg"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
            <header className="bg-white shadow-lg">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full">
                            <ShoppingBag />
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            LadyBag
                        </h1>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                    >
                        <LogOut />
                        <span>Salir</span>
                    </button>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {isAdmin && (
                    <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
                        <h2 className="text-2xl font-bold text-pink-600 mb-6 flex items-center">
                            <Upload />
                            <span className="ml-2">Agregar Nuevo Producto</span>
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                    <Camera />
                                    <span className="ml-2">Fotos de la Bolsa (hasta 3)</span>
                                </label>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[0, 1, 2].map((index) => (
                                        <div key={index} className="space-y-2">
                                            <label className="block text-xs text-gray-600">
                                                Foto {index + 1} {index === 0 && '(Principal)'}
                                            </label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleImageUpload(e, index)}
                                                className="w-full px-3 py-2 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none text-sm"
                                            />
                                            {newProduct.images[index] && (
                                                <img
                                                    src={newProduct.images[index]}
                                                    alt={`Preview ${index + 1}`}
                                                    className="w-full h-32 object-cover rounded-xl shadow-md"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                    <ShoppingBag />
                                    <span className="ml-2">Nombre de la Bolsa</span>
                                </label>
                                <input
                                    type="text"
                                    value={newProduct.name}
                                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none"
                                    placeholder="Ej: Bolsa Elegante Rosa"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                    <FileText />
                                    <span className="ml-2">Descripción</span>
                                </label>
                                <textarea
                                    value={newProduct.description}
                                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none h-24"
                                    placeholder="Describe la bolsa, material, detalles especiales..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                    <DollarSign />
                                    <span className="ml-2">Precio</span>
                                </label>
                                <input
                                    type="text"
                                    value={newProduct.price}
                                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none"
                                    placeholder="$599"
                                />
                            </div>

                            <button
                                onClick={handleAddProduct}
                                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition shadow-lg"
                            >
                                Agregar Producto
                            </button>
                        </div>
                    </div>
                )}

                <div className="bg-white rounded-3xl shadow-xl p-6">
                    {isAdmin && (
                        <h2 className="text-2xl font-bold text-purple-600 mb-6 flex items-center">
                            <Eye />
                            <span className="ml-2">Catálogo Completo</span>
                        </h2>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 relative"
                            >
                                {isAdmin && (
                                    <button
                                        onClick={() => handleDeleteProduct(product.id)}
                                        className="absolute top-3 right-3 z-10 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition shadow-lg"
                                        title="Eliminar producto"
                                    >
                                        <Trash2 />
                                    </button>
                                )}
                                {!isAdmin && product.images.length > 1 && (
                                    <button 
                                        onClick={() => openImageGallery(product)}
                                        className="absolute top-3 right-3 z-10 bg-purple-500 bg-opacity-90 text-white p-2.5 rounded-full hover:bg-purple-600 transition shadow-lg backdrop-blur-sm"
                                        title="Ver todas las fotos"
                                    >
                                        <Eye />
                                    </button>
                                )}
                                <div className="relative">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    {product.images.length > 1 && (
                                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
                                            +{product.images.length - 1} foto{product.images.length > 2 ? 's' : ''}
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                                        {isAdmin ? (
                                            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition">
                                                Ver más
                                            </button>
                                        ) : (
                                            <button 
                                                onClick={() => handleWhatsAppContact(product)}
                                                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition"
                                            >
                                                LA QUIERO!
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedProduct && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                        <button
                            onClick={closeImageGallery}
                            className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition z-10"
                        >
                            <X />
                        </button>

                        <div className="max-w-4xl w-full">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                                <div className="relative bg-gray-100">
                                    <img
                                        src={selectedProduct.images[currentImageIndex]}
                                        alt={`${selectedProduct.name} - Foto ${currentImageIndex + 1}`}
                                        className="w-full h-96 object-contain"
                                    />
                                    
                                    {selectedProduct.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                disabled={currentImageIndex === 0}
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg transition ${
                                                    currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                                                }`}
                                            >
                                                <ChevronLeft />
                                            </button>
                                            
                                            <button
                                                onClick={nextImage}
                                                disabled={currentImageIndex === selectedProduct.images.length - 1}
                                                className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg transition ${
                                                    currentImageIndex === selectedProduct.images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                                                }`}
                                            >
                                                <ChevronRight />
                                            </button>
                                        </>
                                    )}

                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
                                        {currentImageIndex + 1} / {selectedProduct.images.length}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h3>
                                    <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-3xl font-bold text-pink-600">{selectedProduct.price}</span>
                                        <button 
                                            onClick={() => handleWhatsAppContact(selectedProduct)}
                                            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition shadow-lg"
                                        >
                                            LA QUIERO!
                                        </button>
                                    </div>
                                </div>

                                {selectedProduct.images.length > 1 && (
                                    <div className="px-6 pb-6">
                                        <div className="flex gap-2 overflow-x-auto">
                                            {selectedProduct.images.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                                                        idx === currentImageIndex ? 'border-pink-500' : 'border-gray-300 hover:border-pink-300'
                                                    }`}
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`Miniatura ${idx + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

ReactDOM.render(<TiendaBolsas />, document.getElementById('root'));
