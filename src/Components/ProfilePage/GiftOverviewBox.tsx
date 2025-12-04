import EditIcon from "/src/Pictures/edit-icon.svg"
import { Link } from "react-router-dom";
type Props = {
  date: string;
  gift: string;
  price: number;
}

function GiftOverviewBox({date, gift, price}: Props) {
  return (
    <>
      <div className="bg-darkgreen w-98 min-h-35 rounded-lg">
        {/*Date and edit icon */}
        <div className="flex items-center px-6 pt-6">
          <div className="w-6"></div>
          <p className="text-background font-cinzel text-3xl mx-auto">{date}</p>
          <Link to="/organize">
            <img 
              src={EditIcon} 
              alt="Edit icon"
              className="w-6 h-6"
            />
          </Link>
        </div>
        <div className="pl-6 pt-6 pb-6 flex items-center gap-3">
          <div 
            className="h-12 w-64 bg-background rounded-lg pl-2 pt-3 text-darkbrown font-quicksand font-bold text-base">
              {gift}
          </div>
          <div 
            className="h-12 w-19 bg-background rounded-lg pl-2 pt-3 text-darkbrown font-quicksand font-bold text-base">
              {price}
          </div>
        </div>
      </div>
    </>
  )
}

export default GiftOverviewBox;
