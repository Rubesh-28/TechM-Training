function Markup(){
    return(
        <>
        <ul>
            <li>Apple<img src='http://bit.ly/420LMUK' style={{height:'100px'}}/></li>
            <li>Orange<img src='https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=' style={{height:'100px'}}/></li>
            <li>Mango<img src='https://media.istockphoto.com/id/168370138/photo/mango.jpg?s=612x612&w=0&k=20&c=ENq2BrUV8dNH2rth_ZYBBtS9RWDwCbI25SfulxirmnQ=' style={{height:'100px'}}/></li>
        </ul>
        </>
    )
}

function WebsiteLink(){
    return (
        <>
        Visit my website:{" "}
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Example
      </a>
        </>
    )
}

const BlogPost = () => {
    return (
      <>
        <h2>The Beauty of Nature</h2>
        <p>
          Nature is an endless source of inspiration. The vibrant colors of flowers, 
          the serene sound of waves, and the fresh mountain air remind us of the world's wonders.
        </p>
        <p>Author:John Doe</p>
      </>
    );
  };
  
  const Footer = () => {
    return (
      <footer>
        <p>&copy; 2025  All rights reserved.</p>
      </footer>
    );
  };

export {Markup,WebsiteLink,BlogPost,Footer}