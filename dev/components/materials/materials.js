import { Dropdown } from "virtual-dropdown";

const options = {
  templates: {},
  placeholder: "---",
  inputName: "design",
  openClass: "dropdown_list--open",
  data: [
    {
      id: 1,
      value: "Рогожка",
    },
    {
      id: 2,
      value: "Шелк",
    },
    {
      id: 3,
      value: "Коттон",
    },
    {
      id: 4,
      value: "Двунитка",
    },
    {
      id: 5,
      value: "ПВХ",
    },
    {
      id: 6,
      value: "Флок",
    },
  ],
};

const dropdown = new Dropdown("#designSelect", options);
