const FazzFood = (harga, voucher, jarak, pajak) => {
    let finalPrice = 0;
    let tempJarak = 0;
    let discount = 0;
    let taxPrice = 0;
    let hargaPromo = 0;

    if (voucher == "FAZZFOOD50") {
        if (harga > 50000 && harga * 50 / 100) {
            if (jarak == 2) {
                tempJarak = 5000
                if (pajak == true) {
                    taxPrice = harga * (5 / 100) 
                    hargaPromo = harga * (50 / 100)
                    finalPrice = hargaPromo + taxPrice + tempJarak;
                    discount = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${discount}\nBiaya antar : ${tempJarak}\nPajak : ${taxPrice}\nSubTotal : ${finalPrice}`)
                } else {
                    taxPrice = 0
                    hargaPromo = harga * (50 / 100)
                    finalPrice = hargaPromo + taxPrice + tempJarak;
                    discount = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${discount}\nBiaya antar : ${tempJarak}\nPajak : ${taxPrice}\nSubTotal : ${finalPrice}`)
                }
            } else if (jarak > 2) {
                tempJarak = 5000 + ((jarak - 2) * 3000);
                if (pajak == true) {
                    taxPrice = harga * (5 / 100)
                    hargaPromo = harga * (50 / 100)
                    finalPrice = hargaPromo + taxPrice + tempJarak;
                    discount = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${discount}\nBiaya antar : ${tempJarak}\nPajak : ${taxPrice}\nSubTotal : ${finalPrice}`)        
                } else {
                    taxPrice = 0
                    hargaPromo = harga * (50 / 100)
                    finalPrice = hargaPromo + taxPrice + tempJarak;
                    discount = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${discount}\nBiaya antar : ${tempJarak}\nPajak : ${taxPrice}\nSubTotal : ${finalPrice}`)
                }
            }

        } else {
            console.log("Maaf voucher tidak bisa dipakai, harus lebiih dari 50.000")
        }

    } else if (voucher == "DITRAKTIR60") {
        if (harga > 25000) {
            if (jarak == 2) {
                tempJarak = 5000;

                if (pajak == true) {
                    taxPrice = harga * (5 / 100)
                    hargaPromo = harga*(60/100)
                    finalPrice = hargaPromo + taxPrice + tempJarak;
                    discount = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${discount}\nBiaya antar : ${tempJarak}\nPajak : ${taxPrice}\nSubTotal : ${finalPrice}`)
                } else {
                    taxPrice = 0
                    hargaPromo = harga*(60/100)
                    finalPrice = hargaPromo + taxPrice + tempJarak;
                    discount = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${discount}\nBiaya antar : ${tempJarak}\nPajak : ${taxPrice}\nSubTotal : ${finalPrice}`)
                }

            } else if (jarak > 2) {
                tempJarak = 5000 + ((jarak - 2) * 3000);
                if (pajak == true) {
                    taxPrice = harga * (5 / 100)
                    hargaPromo = harga*(60/100)
                    finalPrice = hargaPromo + taxPrice + tempJarak;
                    discount = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${discount}\nBiaya antar : ${tempJarak}\nPajak : ${taxPrice}\nSubTotal : ${finalPrice}`)
                } else {
                    taxPrice = 0;
                    hargaPromo = harga*(60/100)
                    finalPrice = hargaPromo + taxPrice + tempJarak;
                    discount = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${discount}\nBiaya antar : ${tempJarak}\nPajak : ${taxPrice}\nSubTotal : ${finalPrice}`)
                }
            }

        } else {
            console.log("minimal belanja 25.000")
        }

    }
}

FazzFood(75000, 'FAZZFOOD50', 5, true)