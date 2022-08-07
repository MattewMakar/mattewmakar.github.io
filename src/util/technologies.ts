import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiCsharp,
  SiDotnet,
  SiMicrosoftazure,
  SiJava,
  SiMysql,
  SiPostgresql,
  SiMongodb,SiMaterialui
} from "react-icons/si";

export interface Technology {
  name: string;
  Icon: IconType;
}
export const techStack: Technology[] = [
  { name: "JavaScript (ES6+)", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "C#", Icon: SiCsharp },
  { name: "TypeScript", Icon: SiTypescript },
  { name: ".NET core", Icon: SiDotnet },
  { name: "Azure", Icon: SiMicrosoftazure },
  { name: "Java", Icon: SiJava },
  { name: "MySQL", Icon: SiMysql },
  { name: "SQL", Icon: SiPostgresql },
  { name: "Mongodb", Icon: SiMongodb },
  { name: "MaterialUi", Icon: SiMaterialui },

];
