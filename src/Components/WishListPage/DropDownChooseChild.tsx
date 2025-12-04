import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select";

// Props type definition for the dropdown component
type Props = {
  childNames: string[];
  selectedChild?: string;
  handleSelect: (name: string) => void;
};

// Dropdown component for selecting a child
export function ChildDropdown({ childNames, selectedChild, handleSelect }: Props) {


  return (
    <div className="mb-6 ">

      {/* Root Select component controlling dropdown state */}
      <Select
        value={selectedChild ?? undefined}  
        onValueChange={(value) => {
          handleSelect(value);             
        }}
      >
        {/* Trigger: visible button that opens the dropdown */}
        <SelectTrigger 
          className="w-full border border-darkgreen text-darkbrown focus-visible:outline-none focus-visible:ring-[0,5px]  bg-[#EEE2D2] focus:ring-darkgreen rounded font-cinzel">
          
          {/* Value: shows selected child or placeholder */}
          <SelectValue 
          placeholder="Veldu barn" 
          className="text-darkbrown" />
        </SelectTrigger>

        {/* Content: dropdown menu with child names */}
        <SelectContent className="bg-lightbackground rounded-lg font-cinzel  shadow-md ">
          {childNames.map((name) => (
            <SelectItem
              key={name}
              value={name}
              className="text-darkgreen font-cinzel hover:bg-darkgreen hover:text-white cursor-pointer"
            >
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default ChildDropdown;