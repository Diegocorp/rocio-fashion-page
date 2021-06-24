import styled from "styled-components";

export const ContactStyles = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #16384c;

  .container {
    position: relative;
    height: 400px;
    width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
  }

  .container .card {
    margin-top: 200px;
    position: absolute;
    top: 120px;
    max-width: 300px;
    height: 215px;
    background: #fff;
    margin: 30px 10px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
  }

  .container .card:hover {
    height: 420px;
  }

  .container .card .imgBx {
    position: relative;
    width: 260px;
    height: 260px;
    top: -60px;
    left: 20px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    /* overflow: hidden; */
  }

  .container .card .imgBx img {
    height: 260px;
    width: 260px;

    /* max-height: 100%; */
    max-width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .container .card .content {
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #111;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  .container .card:hover .content {
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    /* transition-delay: 0.3s; */
  }
`;
