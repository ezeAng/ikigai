export const generalStyles = {
    backgroundColor: "#854621",
    positiveColor: "#CF8E55",
    clay: "#BFAEA4" ,
    btnOpacity: 0.85,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
    boxShadowHover: "0 4px 10px rgba(0, 0, 0, 0.5)"
}

export const homeBtnStyle = {
    backgroundColor: "#919e97fa",
    opacity: 0.85,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.5s ease-in-out',
    '&:hover': {
      transform: 'translateY(-10px)', // move the card up by 10px on hover
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)' ,
      opacity: 1,
      backgroundColor: '#919e97fa',
    },
    borderRadius: 15,
    color: "black",
    width: "20rem",
    height: "6rem"
  }

export const btnContStyle = {
    marginTop: "3rem",
    width: "100vw",
    position: "relative",
    bottom: 0
}

export const resultHeaderStyle ={
    margin: "auto",
    marginTop: "1rem",
    marginBottom: "1rem",
    width: "100vw",
    display : "block",
    justifyContent: 'center',
    alignItems: 'center'
}


export const typographyStyle = {
    padding: 5,
    fontSize: '1.25rem', // Adjust the font size as needed for readability
    textAlign: 'left',
};


export const resultStyle ={
    backgroundColor: generalStyles.clay,
    margin: "auto",
    marginTop: "2rem",
    marginBottom: "1rem",
    width: "80vw",
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // light shadow for a hovering effect
    borderRadius: '20px', // rounded corners
    padding: '1rem',
    display: 'flex',
    alignItems: 'center', // vertically center the text
    justifyContent: 'center', // horizontally center the text
    transition: 'transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-10px)', // move the card up by 10px on hover
      boxShadow: '0 6px 16px rgba(0, 0, 0, 1)' // increase the shadow to emphasize the hover
    }
  }

export const loaderStyle = {
    display : "flex",
    position: "absolute",
    top: 0,
    height: "100vh",
    width: "100vw",
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'scale(2)'
}

export const headerStyle = {
    margin: "auto",
    marginTop: 10,
    marginBottom: 5,
    width: "100vw",
    height: 100
}

export const beginBtnStyle = {
    backgroundColor: generalStyles.backgroundColor,
    opacity: generalStyles.btnOpacity,
    transition: 'transform 0.5s ease-in-out',
    '&:hover': {
      opacity: 1,
      transform: 'scale(1.05)',
      transition: 'transform 0.8s ease-in-out',
      backgroundColor: generalStyles.backgroundColor,
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)"
    },
    borderRadius: 15,
    color: "white",
    margin: "auto",
    marginTop: 20,
    width: 0.25,
    height: 0.15,
    boxShadow: generalStyles.boxShadow
}

export const btnStyle = {
    backgroundColor: generalStyles.backgroundColor,
    opacity: 0.85,
    transition: 'transform 0.5s ease-in-out',
    boxShadow: generalStyles.boxShadow,
    '&:hover': {
      opacity: 1,
      transform: 'scale(1.05)',
      transition: 'transform 0.8s ease-in-out',
      backgroundColor: generalStyles.backgroundColor,
      boxShadow: generalStyles.boxShadowHover,
    },
    
    borderRadius: 15,
    color: "white",
    margin: 10,
    marginTop: 15,
    width: 200,
    height: 70
}

export const submitBtnStyle = {
    backgroundColor: generalStyles.positiveColor,
    opacity: generalStyles.btnOpacity,
    transition: 'transform 0.5s ease-in-out',
    boxShadow: generalStyles.boxShadow,
    '&:hover': {
      opacity: 1,
      transform: 'scale(1.3)',
      transition: 'transform 0.5s ease-in-out',
      backgroundColor: generalStyles.positiveColor,
      boxShadow: generalStyles.boxShadowHover,
    },
    borderRadius: 15,
    color: "black",
    marginLeft: 5,
    marginRight: 5,
    margin: 10,
    marginTop: 15,
    width: 200,
    height: 70
  }

