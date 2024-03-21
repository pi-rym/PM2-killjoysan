const CarritoCompra = require("../index");

describe("Clase CarritoCompra", () => {
    let carritoCompra;

    beforeEach(() => {
        carritoCompra = new CarritoCompra()
    })

    describe("Sobre el constructor de la clase CarritoCompra", () => {
        it("CarritoCompra deberia ser una clase", () => {
            expect(typeof CarritoCompra.prototype.constructor).toBe("function")
        })

        it("carritoCompra deberia ser una instancia de la clase CarritoCompra", () => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true)
        })

        it("Deberia guardar productos en una lista", () => {
            expect(carritoCompra.products).toEqual([])
        })
    })

    describe("Metodos de la clase CarritoCompra", () => {
        const product1 = {
            id:1,
            name:"Lapicero Azul",
            price: 1000,
            quantity: 3
        }

        const product2 = {
            id:1,
            name:"Lapicero Negro",
            price: 900,
            quantity: 5
        }

        it("Deberia tener un metodo llamado agregarProducto", () => {
            expect(typeof carritoCompra.agregarProducto).toBe("function")
        })

        it("Deberia tener un metodo llamado calcularTotal", () => {
            expect(typeof carritoCompra.calcularTotal).toBe("function")
        })

        it("Deberia tener un metodo llamado aplicarDescuento", () => {
            expect(typeof carritoCompra.aplicarDescuento).toBe("function")
        })

        it("El metodo agregarProducto deberia poder agregar un producto a la lista", () => {
            carritoCompra.agregarProducto(product1)
            expect(carritoCompra.products).toContain(product1)
        })

        it("El metodo calcularTotal deberia calcular el total de la compra sumando los precios de todos los productos en el carrito", () => {
            carritoCompra.agregarProducto(product1)
            carritoCompra.agregarProducto(product2)

            const totalExpect = product1.price * product1.quantity + product2.price * product2.quantity

            const total = carritoCompra.calcularTotal()

            expect(total).toBe(totalExpect)
        })

        it("El metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra", () => {
            carritoCompra.agregarProducto(product1)
            carritoCompra.agregarProducto(product2)

            const subtotal = product1.price * product1.quantity + product2.price * product2.quantity;

            const porcentajeDescuento = 15

            const totalExpect = subtotal - (subtotal * (porcentajeDescuento/100))

            const total = carritoCompra.aplicarDescuento(porcentajeDescuento)

            expect(totalExpect).toBe(total)
        })
    })
})