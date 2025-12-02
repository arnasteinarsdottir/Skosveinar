import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select";

type Props = {
  childNames: string[];
  selectedChild?: string;
  handleSelect: (name: string) => void;
};

export function ChildDropdown({ childNames, selectedChild, handleSelect }: Props) {
  return (
    <div className="w-full max-w-[220px] mt-4">
      <Select
        value={selectedChild ?? undefined}  
        onValueChange={(value) => {
          console.log("Selected child:", value);
          handleSelect(value);             
        }}
      >
        <SelectTrigger className="w-full border border-darkgreen text-darkbrown focus-visible:outline-none focus-visible:ring-[0,5px]  bg-[#EEE2D2] focus:ring-darkgreen rounded font-cinzel">
          <SelectValue placeholder="Veldu barn" className="text-darkbrown" />
        </SelectTrigger>

        <SelectContent className="bg-lightbackground rounded-lg font-cinzel  shadow-md">
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