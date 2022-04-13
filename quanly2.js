// thêm vào giỏ hàng
const btn = document.querySelectorAll("button")
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector(".anh-sanpham").src
        var productName = product.querySelector(".tensanpham").innerText
        var productPrice = product.querySelector(".gia").innerText

        addcart(productImg, productName, productPrice)
        chon_suaruamat()
    })
})

function addcart(productImg, productName, productPrice) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll(".tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".goitensp")
        if (productT[i].innerHTML == productName) {
            alert("Sản phẩm đã có trong giỏ hàng");
            return
        }


    }

    var trContent = '<tr>' +
        // '<td>1</td>' +
        '<td><img style="width:70px" src="' + productImg + '" alt=""></td>' +
        '<td class="goitensp">' + productName + '</td>' +
        '<td><div class="buttons-added">' +

        '<input aria-label="quantity" class="input-qtt" max="Số tối đa" min="1" name="" type="number"' +
        'value="1">' +

        '</div></td>' +
        '<td class="cost">' + productPrice + '</td>' +
        '<td>' +
        '</td>' +
        '<td><button class="xoasp">Xóa</button></td>' +
        '</tr>';
    addtr.innerHTML = trContent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}

// tính tổng các sản phẩm
function carttotal() {
    var cartItem = document.querySelectorAll(".tbody tr");
    var totalCost = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value;
        console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".cost").innerHTML;
        console.log(productPrice)
        totalMulti = inputValue * productPrice * 1000
        totalCost = totalCost + totalMulti;
        
    }
    var addtr2 = document.createElement("div")
    var trContent2 = '<div>' +
        '<h3><span class="tonggia"></span></h3>'


    '</div>';
    addtr2.innerHTML = trContent2;
    var cartTable2 = document.querySelector("table")
    cartTable2.append(addtr2)

    var cartTinhtong = document.querySelector(".tonggia")
    cartTinhtong.innerHTML = "Tổng đơn hàng: " + totalCost.toLocaleString('de-DE') + " VND";
    changeqtt()

}

// Xóa sản phẩm trong giỏ
function deleteCart() {
    var cartItem = document.querySelectorAll(".tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".xoasp")
        productT[i].addEventListener("click", function (event) {
            var cartDelete = event.target
            var cartitems = cartDelete.parentElement.parentElement
            cartitems.remove()
            carttotal()
            
        })
    }
}

//thay đổi số lượng trong giỏ
function changeqtt() {
    var cartItem = document.querySelectorAll(".tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var qtt = cartItem[i].querySelector("input")
        qtt.addEventListener("change", function () {
            carttotal()
        })
    }
}


