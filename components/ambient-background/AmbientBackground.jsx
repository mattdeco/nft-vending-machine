import React from "react";
import propTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "./AmbientBackground.module.scss";

const AmbientBackground = ({ animate }) => {
  return (
    <div className={styles["container"]}>
      <svg
        width="100%"
        height="100vh"
        viewBox="0 0 1080 1920"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_118_8)">
          <rect width="1080" height="1920" fill="url(#paint0_linear_118_8)" />
          <rect
            width="1080"
            height="1920"
            fill="url(#paint1_linear_118_8)"
            fillOpacity="0.6"
            style={{ mixBlendMode: "multiply" }}
          />
          <g style={{ mixBlendMode: "multiply" }} opacity="0.8">
            <rect
              width="2563"
              height="2563"
              transform="translate(-746 802)"
              fill="url(#paint2_radial_118_8)"
              style={{ mixBlendMode: "multiply" }}
            />
          </g>
          <g style={{ mixBlendMode: "multiply" }} opacity="0.8">
            <rect
              width="2563"
              height="2563"
              transform="translate(-746 -1603)"
              fill="url(#paint3_radial_118_8)"
              style={{ mixBlendMode: "multiply" }}
            />
          </g>
        </g>
        <defs>
          <motion.linearGradient
            id="paint0_linear_118_8"
            x1="-492.5"
            y1="3331.5"
            x2="2838"
            y2="1642.39"
            initial={{ gradientTransform: "rotate(0)" }}
            animate={animate ? { gradientTransform: "rotate(359)" } : null}
            gradientUnits="userSpaceOnUse"
            transition={{
              repeat: Infinity,
              duration: 10,
              repeatType: "mirror",
            }}
          >
            <stop offset="0.08" stopColor="#9945FF" />
            <stop offset="0.3" stopColor="#8752F3" />
            <stop offset="0.5" stopColor="#5497D5" />
            <stop offset="0.6" stopColor="#43B4CA" />
            <stop offset="0.72" stopColor="#28E0B9" />
            <stop offset="0.97" stopColor="#19FB9B" />
          </motion.linearGradient>
          <linearGradient
            id="paint1_linear_118_8"
            x1="540"
            y1="0"
            x2="540"
            y2="2191"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="0.548525" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint2_radial_118_8"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1281.5 1281.5) rotate(90) scale(1281.5)"
          >
            <stop />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint3_radial_118_8"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1281.5 1281.5) rotate(90) scale(1281.5)"
          >
            <stop />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
          <clipPath id="clip0_118_8">
            <rect width="1080" height="1920" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

AmbientBackground.propTypes = {
  animate: propTypes.bool,
};

AmbientBackground.defaultProps = {
  animate: false,
};

export default AmbientBackground;
