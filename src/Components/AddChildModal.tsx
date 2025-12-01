import ModalButton from "./ModalButton";
import { useState } from "react";

type Props = {
    onClose: () => void;
}

function AddChildModal ({ onClose }: Props) {

    const [childName, setChildName] = useState("");
    const addChild = () => {
        const getChildName = localStorage.getItem("children") || "[]";
        console.log(getChildName);
        const arrayOfChildren = JSON.parse(getChildName);
        const child = {
            name: childName,
            gifts: {}
        }
        arrayOfChildren.push(child);
        localStorage.setItem("children", JSON.stringify(arrayOfChildren));
        onClose();
    }

    return (
        <>
            {/* This fixed div covers the screen */}
            <div className="fixed inset-0 bg-darkred/30 backdrop-blur-xs z-50">
                {/* Click the background to close */}
                <div className="absolute inset-0 flex justify-center items-center "
                    onClick={onClose}
                >
                    <div 
                        className="relative z-10 w-96 h-69 bg-darkbrown rounded-lg border border-background"
                        onClick = {(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col items-center">
                            <p className="font-cinzel text-background text-2xl pt-10">Skrá nýtt barn</p>
                            {/*Input field area*/}
                            <div className="flex flex-col pt-8">
                                <p className="font-quicksand font-medium text-background text-base pb-0.5">Nafn</p>
                                <input 
                                    onChange={(e) => setChildName(e.target.value)}
                                    type="text"
                                    placeholder="Nafn barns"
                                    className="h-12 w-64 bg-darkbrown rounded-lg border border-background pl-2 text-background italic font-light font-quicksand text-base"
                                />
                            </div>
                            <div className="pt-6">
                                <ModalButton
                                    onClick={addChild} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddChildModal;