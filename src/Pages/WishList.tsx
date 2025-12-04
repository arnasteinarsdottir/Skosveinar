import Navbar from ".././Components/Navbar/Navbar.tsx"; 
import ChildGiftViewer from ".././Components/WishListPage/ChildGiftViewer.tsx";

function WishList() {
    return (
        <>  
         <div className="mb-20">
        <Navbar/>
        </div>
        <ChildGiftViewer/>
        </>
    );
    }
    export default WishList;