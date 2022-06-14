// check palindrom
const palindromm = (result)=>{
    const palin = result.split('').reverse().join('').toLowerCase()
    console.log(result)

    if (palin===result.toLowerCase()){
        console.log('ini adalah palindrom')
    }else{
        console.log('ini bukan palindrom')
    }
}
palindromm('Malam')