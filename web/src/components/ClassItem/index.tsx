import React from "react";

import whatsppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import api from "../../services/api";

export interface ClassInfo {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface ClassItemProps {
  classInfo: ClassInfo;
}

const ClassItem: React.FC<ClassItemProps> = ({ classInfo }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: classInfo.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={classInfo.avatar} alt={classInfo.name} />
        <div>
          <strong>{classInfo.name}</strong>
          <span>{classInfo.subject}</span>
        </div>
      </header>
      <p>{classInfo.bio}</p>
      <footer>
        <p>
          Price/Hour
          <strong>$ {classInfo.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
          href={`https://wa.me/${classInfo.whatsapp}`}
        >
          <img src={whatsppIcon} alt=" WhatsApp" />
          Get in Contact
        </a>
      </footer>
    </article>
  );
};

export default ClassItem;
