import React from "react";
import Select from "react-select";

// Create an array of flag options with label, value and image properties
let flagOptions = [
  { label: "India", value: "india", image: "https://flagpedia.net/data/flags/w580/in.png" },
  { label: "United States", value: "united-states", image: "https://flagpedia.net/data/flags/w580/us.png" },
  { label: "China", value: "china", image: "https://flagpedia.net/data/flags/w580/cn.png" },
  // Add more options as you wish
];

// Create a custom component to render the flag image and label
const FlagOption = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt={data.label} style={{ width: "20px", height: "15px" }} />
      <span>{data.label}</span>
    </div>
  );
};

// Create a custom component to render the selected flag image and label
const FlagSingleValue = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt={data.label} style={{ width: "20px", height: "15px" }} />
      <span>{data.label}</span>
    </div>
  );
};

// Create a function component to render the select element
const FlagSelect = () => {
  // Use state to store the selected option
  const [selectedOption, setSelectedOption] = React.useState(null);

  // Handle the change event of the select element
  const handleChange = (option) => {
    setSelectedOption(option);
  };

  // Return the select element with custom components and styles
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={flagOptions}
      components={{ Option: FlagOption, SingleValue: FlagSingleValue }}
      styles={{
        option: (provided) => ({
          ...provided,
          display: "flex",
          alignItems: "center",
        }),
        singleValue: (provided) => ({
          ...provided,
          display: "flex",
          alignItems: "center",
        }),
      }}
    />
  );
};

export default FlagSelect;
