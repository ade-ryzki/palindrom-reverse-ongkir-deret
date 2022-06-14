//function yang menerima parameter hanya deret Angka dan menghasilkan output
const divideAndSort = (result)=> {
    let pro1 = result.toString().split(0)
    let pro2 = pro1.map((item)=>{
        return item.split('').sort().join('')
    })
    console.log(parseInt(pro2.join("")))
}
divideAndSort(5956560159466056)