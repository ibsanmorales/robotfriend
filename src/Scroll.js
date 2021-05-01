
const Scroll = (props) =>{
    console.log(props);
    return (
        <div style={{ overflow:'scroll', border:'5px solid black', height:'800px', display:'none'}}>
            {props.children}
        </div>
    );
}

export default Scroll;