import React from "react";
import { motion } from "framer-motion";

const WorkItems = ({ item }) => {
    return (
        <motion.div
            className="work__card"
            key={item.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <img src={item.image} alt={item.image} className="work__img" />
            {/* <div className="overlay">
        <div className="content">
          <p>This is the workitem description section</p>
        </div>
      </div> */}
            <h3 className="work__title">{item.title}</h3>
            <span className="work__skills"> {item.skills}</span>
            <div className="work__button">
                <a href={item.url} className="work__url">
                    Github
                </a>
                <a href={item.demo} className="work__link ">
                    {item.demo ? "DEMO" : ""}
                </a>
                {/* <i className="bx bx-right-arrow-alt work__button-icon"></i> */}
            </div>
        </motion.div>
    );
};

export default WorkItems;
