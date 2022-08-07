import { BioEntry } from "util/bioEntries";

interface TabPanelProps {
  children?: React.ReactNode;
  index?: string;
  value?: BioEntry;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value?.summary !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value?.summary === index && <>{children}</>}
    </div>
  );
};
export default TabPanel;
