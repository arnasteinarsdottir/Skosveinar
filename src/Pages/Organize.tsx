import OrganizingInput from "../Components/OrganizingInput";
import SantaCard from "../Components/SantaCard";
import Navbar from "@/Components/Navbar";

function Organize () {
    return (
        <>
        <Navbar/>
                <div className="pt-20"></div>
            <div className="flex flex-col items-center mt-14">
                <div className="flex flex-col items-start md:items-center">
                    <p className="font-cinzel text-2xl text-darkbrown">
                        Hugmyndabanki <br />
                        jólasveinsins
                    </p>
                    <div className="mt-14 md:gap-6 md:flex">
                        <div className="pb-6 md:pb-0">
                            <SantaCard />
                        </div>
                        <OrganizingInput />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Organize;
