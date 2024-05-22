import React from 'react';
import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Box, HStack } from "@chakra-ui/react";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  function Refer() {
    window.alert("Inivite your friend to earn money from this app.");
    window.prompt(" Enter invite code here");
  }

  return (
    // <Box
    //   position="fixed"
    //   top={0}
    //   left={0}
    //   right={0}
    //   transform="translateY(0)"
    //   transitionProperty="transform"
    //   transitionDuration=".3s"
    //   transitionTimingFunction="ease-in-out"
    //   backgroundColor="#18181b"
    //   height="50px"
    //   ref={headerRef}
    // >
    //   <Box color="white" maxWidth="1280px" margin="0 auto" height="50px">
    //     <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
    //       <nav>
    //         <HStack spacing={8}>
    //           <FontAwesomeIcon icon={faBars} beat />
    //           <h1 style={{ textAlign: "center" }}>XPENSO App</h1>
    //         </HStack>
    //       </nav>
    //       <nav>
    //         <button style={{display: 'flex', borderRadius:'15px', paddingRight:'10px',marginTop:'5px'}} onClick={(Refer)}>Refer & Earn </button>
    //       </nav>
    //     </HStack>
    //   </Box>
    // </Box>
    <></>
  );
};

export default Header;
