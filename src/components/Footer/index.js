import styled from 'styled-components';
import { Cell } from "styled-css-grid";

const FooterWrapper = styled.footer`
    box-sizing: border-box;
    margin-top: 30px;
    padding: 0 10px;
    width: 100%;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    
    p {
        margin-bottom: 20px;
    }
`;

const SVGWrapper = styled.svg`
    
`;

const Footer = () => {
    return (
        <Cell width={12}>
            <FooterWrapper>
                <p>
                    A wizard is never late, nor is he early, he arrives precisely when he means to
                </p>
                <SVGWrapper height="20px" width="20px" viewBox="-18 0 511 511.71154" xmlns="http://www.w3.org/2000/svg">
                    <path d="m229.839844 127.070312c1.429687 2.757813 1.363281 6.054688-.179688 8.75l-2.050781 3.566407 4.875-.601563c.371094-.046875.75-.066406 1.125-.066406 2.492187.003906 4.878906 1.023438 6.601563 2.824219l3.382812 3.539062.683594-4.058593c.507812-3.0625 2.535156-5.660157 5.386718-6.894532l3.371094-1.460937-3.65625-1.910157c-2.632812-1.375-4.4375-3.941406-4.835937-6.886718l-.648438-4.816406-3.546875 3.316406c-2.167968 2.042968-5.199218 2.894531-8.109375 2.277344l-4.070312-.839844zm0 0"/>
                    <path d="m220.898438 12.007812-105.207032 325.660157c17.167969 5.785156 34.785156 10.125 52.671875 12.972656l.429688-2.449219-28.46875-27.246094c-2.53125-2.417968-3.460938-6.066406-2.390625-9.402343 1.066406-3.332031 3.945312-5.761719 7.410156-6.257813l39.503906-5.632812 17.621094-35.070313c1.71875-2.875 4.824219-4.632812 8.171875-4.632812 3.351563 0 6.453125 1.757812 8.175781 4.632812l17.617188 35.070313 39.507812 5.632812c3.464844.496094 6.339844 2.925782 7.410156 6.257813 1.066407 3.335937.136719 6.984375-2.390624 9.402343l-28.472657 27.246094 1.34375 7.707032c36.285157-.738282 72.261719-6.851563 106.753907-18.148438l-105.464844-326.078125c-2.753906-7.097656-9.617188-11.7460938-17.226563-11.671875-7.613281.0742188-14.382812 4.859375-16.996093 12.007812zm84.316406 194.46875c2.125 2.851563 2.40625 6.679688.714844 9.8125l-9.300782 17.222657 9.328125 16.203125c1.71875 2.992187 1.609375 6.695312-.289062 9.578125-1.894531 2.886719-5.253907 4.457031-8.679688 4.0625l-20.519531-2.367188-14.488281 14.753907c-2.421875 2.457031-6.019531 3.34375-9.300781 2.292968-3.285157-1.050781-5.699219-3.859375-6.242188-7.265625l-2.9375-18.449219-18.101562-7.582031c-3.28125-1.371093-5.46875-4.519531-5.609376-8.074219-.136718-3.554687 1.796876-6.867187 4.960938-8.492187l18.511719-9.5 2.871093-19.199219c.5-3.347656 2.804688-6.144531 5.996094-7.273437 3.191406-1.128907 6.746094-.402344 9.238282 1.890625l14.28125 13.164062 20.367187-4.25c3.484375-.730468 7.070313.625 9.199219 3.472656zm-51.601563-114.804687c3.222657 1.144531 5.535157 3.988281 5.996094 7.375l2.398437 17.675781 16.539063 8.601563c3.101563 1.640625 4.992187 4.914062 4.863281 8.417969-.128906 3.507812-2.253906 6.632812-5.46875 8.039062l-16.457031 7.105469-2.804687 17.226562c-.570313 3.414063-3.019532 6.210938-6.328126 7.230469-.871093.273438-1.777343.410156-2.6875.410156-2.496093 0-4.886718-1.019531-6.609374-2.824218l-12.847657-13.429688-18.441406 2.285156c-3.433594.425782-6.816406-1.125-8.734375-4.007812-1.917969-2.882813-2.046875-6.601563-.324219-9.605469l8.636719-15.105469-8.226562-15.898437c-1.628907-3.132813-1.304688-6.921875.824218-9.734375 2.132813-2.816406 5.695313-4.148438 9.148438-3.433594l18.289062 3.785156 13.007813-12.175781c2.480469-2.304687 6.03125-3.050781 9.226562-1.9375zm0 0"/>
                    <path d="m280.503906 224.910156-5.707031 1.195313c-2.882813.59375-5.878906-.226563-8.054687-2.210938l-5.066407-4.664062-1.015625 6.804687c-.433594 2.914063-2.25 5.4375-4.871094 6.78125l-5.191406 2.671875 4.570313 1.929688c2.917969 1.226562 4.992187 3.875 5.484375 7.003906l.914062 5.574219 4.910156-5.007813c1.980469-2.007812 4.769532-2.992187 7.570313-2.679687l6.976563.804687-2.808594-4.890625c-1.582032-2.746094-1.628906-6.117187-.125-8.90625zm0 0"/>
                    <path d="m81.316406 384.625c-49.664062 13.980469-80.960937 34.515625-80.960937 53.945312 0 34.59375 97.628906 73.140626 237.714843 73.140626 140.085938 0 237.714844-38.546876 237.714844-73.140626 0-19.429687-31.296875-39.964843-80.96875-53.945312l14.226563 44.097656c2.742187 8.386719-.921875 17.535156-8.695313 21.714844-19.054687 10.175781-73.070312 33.84375-162.277344 33.84375-89.207031 0-143.222656-23.667969-162.304687-33.828125-7.769531-4.171875-11.433594-13.308594-8.703125-21.695313zm0 0"/>
                    <path d="m254.726562 320.734375-25.597656-3.65625c-2.960937-.425781-5.523437-2.273437-6.867187-4.945313l-11.621094-23.085937-11.609375 23.085937c-1.34375 2.671876-3.90625 4.519532-6.867188 4.945313l-25.601562 3.65625 18.40625 17.621094c2.203125 2.105469 3.214844 5.175781 2.6875 8.179687l-4.378906 25.089844 23.175781-11.96875c2.632813-1.359375 5.761719-1.359375 8.394531 0l23.175782 11.96875-4.378907-25.089844c-.523437-3.003906.484375-6.074218 2.6875-8.179687zm0 0"/>
                    <path d="m84.46875 434.34375c17.773438 9.492188 68.519531 31.652344 153.601562 31.652344 85.082032 0 135.824219-22.160156 153.699219-31.695313l-19.691406-60.894531c0-.125-.101563-.238281-.121094-.375l-5.777343-17.871094c-35.285157 11.539063-72.054688 17.90625-109.164063 18.90625l2.191406 12.5625c.597657 3.421875-.796875 6.890625-3.597656 8.945313-2.800781 2.054687-6.527344 2.34375-9.613281.746093l-35.355469-18.285156-35.355469 18.285156c-3.085937 1.597657-6.808594 1.308594-9.613281-.746093-2.800781-2.054688-4.195313-5.523438-3.597656-8.945313l3.144531-17.984375c-18.726562-2.992187-37.175781-7.535156-55.148438-13.585937zm0 0"/>
                </SVGWrapper> 
            </FooterWrapper>
        </Cell>
    );
};

export default Footer;