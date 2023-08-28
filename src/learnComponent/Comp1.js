const Comp1=(props)=>{
    console.log(props.name)
    console.log(props.address)
    console.log(props.age)
    console.log(props.isMarried)
    console.log(props.FavFood)
    console.log(props.school)
    console.log(props.school.name)
    console.log(props.school.location)
    
    return(
        <div>This is Comp1 component</div>
    )
}
export default Comp1