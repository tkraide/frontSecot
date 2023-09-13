import React from "react";
import "../Footer/Footer.css";
import CA from "../../img/CA_patabisao.png";
import dcomp from "../../img/dcomp.png";
import ufscar_logo from "../../img/ufscar_logo.png";

export default function Footer() {

  return (
    <footer className="footer-bg">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="grid-1">
              <div className="grid-1-title-secot">
                <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5695 0.0980377C17.3379 0.396414 16.3412 1.41851 16.0809 2.65646C15.9349 3.34844 15.9412 21.086 16.0809 21.7018C16.3856 22.9842 17.4013 23.9936 18.6329 24.2475C19.1154 24.3491 20.055 24.2919 20.4295 24.1459C21.5469 23.6952 22.3595 22.7747 22.5817 21.7208C22.6832 21.2447 22.6832 3.06276 22.5817 2.58663C22.461 1.99622 22.1563 1.46295 21.6675 0.980471C20.8232 0.142477 19.7058 -0.181293 18.5695 0.0980377Z" fill="white" />
                  <path d="M23.2927 13.3028C23.2863 19.537 23.2673 22.5652 23.2165 22.8255C23.0007 24.0317 22.0357 25.0665 20.7851 25.422C20.2454 25.5807 19.2741 25.5235 18.7345 25.3077C18.0806 25.0411 17.5093 24.5713 17.0966 23.9618C16.8808 23.6444 16.9316 23.8539 17.2172 24.438C17.6045 25.2506 18.5441 25.9679 19.4582 26.152C19.9407 26.2536 20.8803 26.1965 21.2548 26.0505C22.3912 25.5934 23.2102 24.6602 23.4133 23.5809C23.5149 23.0286 23.4768 4.53561 23.3689 4.31341C23.3117 4.19279 23.2927 6.19255 23.2927 13.3028Z" fill="white" />
                  <path d="M27.4446 6.33227C26.4859 6.64969 25.8257 7.29723 25.5083 8.21776C25.3432 8.70024 25.3369 9.49379 25.4956 9.97628C25.7495 10.7381 26.1177 11.1825 26.943 11.7411C28.4857 12.7759 29.8379 14.1789 30.8029 15.7343C31.1647 16.3247 31.4949 16.9469 31.4441 16.9469C31.4314 16.9469 31.2727 16.731 31.0949 16.4707C30.2061 15.1566 28.9237 13.8806 27.5461 12.9537C27.0192 12.5918 26.6574 12.2617 26.4352 11.9316C26.2447 11.6459 26.3145 11.976 26.5367 12.3887C26.797 12.8775 27.1271 13.214 27.762 13.6393C29.311 14.6805 30.6823 16.0962 31.6218 17.6325C31.9964 18.2419 32.1932 18.6863 32.3329 19.2386C33.0629 22.0574 32.8915 24.9459 31.825 27.6122C30.2696 31.5229 26.8605 34.5511 22.7785 35.643C21.4897 35.9858 20.7597 36.0747 19.2551 36.0811C17.6553 36.0811 16.8363 35.9731 15.4905 35.5795C13.2748 34.9383 11.5036 33.9035 9.83399 32.2783C8.71032 31.1864 7.84693 29.9739 7.1613 28.5328C6.29156 26.7171 5.89161 24.9332 5.89161 22.9144C5.89161 20.9146 6.31696 19.0038 7.15495 17.2325C8.22149 14.9915 9.78955 13.1695 11.8718 11.7475C12.6146 11.246 12.9892 10.7825 13.2304 10.0905C13.3891 9.61441 13.3891 8.71928 13.2241 8.28124C12.5829 6.56717 10.7101 5.80535 9.12932 6.59891C8.22784 7.056 6.64073 8.33203 5.44722 9.55728C4.23467 10.8079 3.38398 11.9316 2.52694 13.4235C0.558923 16.8389 -0.336207 21.1051 0.114532 24.8824C0.311334 26.5076 0.590665 27.7773 1.03506 29.0724C1.33978 29.9485 2.29839 32.1831 2.83801 33.2623C4.14579 35.8906 6.06937 38.2078 8.39925 39.96C13.916 44.1118 21.2485 45.0197 27.6033 42.3279C33.3423 39.8965 37.5195 34.9955 38.9543 29.0089C39.4558 26.933 39.6018 24.73 39.3796 22.6287C39.2844 21.7336 39.1193 20.6988 39.0622 20.6417C39.0114 20.5845 39.0241 20.7623 39.1384 21.4923C39.2907 22.5017 39.2907 25.2062 39.1384 26.2473C38.9035 27.7963 38.6876 28.7232 38.2623 29.9866C36.2372 35.9668 31.3869 40.5884 25.2544 42.3787C23.4323 42.912 21.8389 43.1342 19.8582 43.1342C18.4171 43.1342 17.6807 43.0707 16.4046 42.8485C11.0529 41.8899 6.37409 38.7411 3.49825 34.1511C3.14274 33.5861 2.57773 32.564 2.62217 32.564C2.62851 32.564 2.88245 32.9259 3.18083 33.3703C6.03128 37.6301 10.3546 40.5504 15.319 41.5471C19.236 42.3406 23.1594 41.9534 26.778 40.4234C32.9804 37.7951 37.3799 32.2339 38.421 25.676C38.7384 23.6889 38.7194 21.2638 38.3702 19.3212C37.8116 16.2168 36.3514 13.0743 34.339 10.6302C33.2788 9.34778 31.8377 8.00826 30.5236 7.10043C29.4888 6.38306 29.0634 6.218 28.2699 6.22435C27.9842 6.2307 27.6223 6.27514 27.4446 6.33227Z" fill="white" />
                  <path d="M13.9732 10.6747C13.8906 11.2524 13.7002 11.7476 13.4145 12.1348C13.186 12.4459 13.0907 12.5221 11.9226 13.3791C9.08486 15.4551 7.20572 18.5785 6.65341 22.1527C6.482 23.2383 6.482 24.9968 6.64706 26.076C6.71689 26.5077 6.78673 26.8823 6.81212 26.9013C6.83751 26.9267 6.84386 26.7997 6.81847 26.6283C6.79942 26.4506 6.76133 25.8538 6.73594 25.2951C6.65341 23.1049 7.06606 21.0734 7.98023 19.1372C9.04677 16.8962 10.6148 15.0742 12.6971 13.6521C13.7637 12.9347 14.1763 12.192 14.17 11.0429C14.1636 10.2303 14.062 10.0398 13.9732 10.6747Z" fill="white" />
                  <path d="M38.9797 20.4385C38.9797 20.5274 38.9924 20.5592 39.0114 20.5147C39.0241 20.4766 39.0241 20.4005 39.0114 20.356C38.9924 20.3179 38.9797 20.3497 38.9797 20.4385Z" fill="white" />
                  <path d="M6.85657 27.1043C6.85657 27.1932 6.86926 27.2249 6.88831 27.1805C6.90101 27.1424 6.90101 27.0662 6.88831 27.0218C6.86926 26.9837 6.85657 27.0154 6.85657 27.1043Z" fill="white" />
                </svg>
                <h2><span id="white-S">S</span>eCoT</h2>
              </div>
              <p>&copy; {new Date().getUTCFullYear()} SeCoT. Todos os direitos reservados</p>
            </div>
            <div className="grid-2">
              <h3>Realização</h3>
              <div className="grid-2-imagens">
                <img src={CA} alt="CA" />
                <img src={dcomp} alt="dcomp" />
                <img src={ufscar_logo} alt="ufscar logo" />
              </div>
            </div>
            <div className="grid-3">
              <h3>Redes Sociais</h3>
              <div className="grid-3-imagens">
                <a href="https://www.linkedin.com/company/secot-ufscar" target="_blank">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.666657 3.73009C0.666657 2.91764 0.9894 2.13847 1.56389 1.56398C2.13837 0.989495 2.91754 0.666752 3.72999 0.666752H34.2667C34.6693 0.666095 35.0681 0.744857 35.4402 0.89853C35.8124 1.0522 36.1506 1.27777 36.4354 1.56231C36.7203 1.84686 36.9462 2.18479 37.1003 2.55677C37.2543 2.92875 37.3335 3.32746 37.3333 3.73009V34.2668C37.3338 34.6695 37.2548 35.0683 37.1009 35.4404C36.9471 35.8126 36.7214 36.1508 36.4367 36.4356C36.152 36.7204 35.814 36.9463 35.4419 37.1004C35.0698 37.2545 34.671 37.3336 34.2683 37.3334H3.72999C3.32757 37.3334 2.92909 37.2541 2.55732 37.1001C2.18555 36.946 1.84778 36.7202 1.5633 36.4356C1.27882 36.151 1.05321 35.8131 0.899361 35.4412C0.745512 35.0694 0.666438 34.6708 0.666657 34.2684V3.73009ZM15.18 14.6468H20.145V17.1401C20.8617 15.7068 22.695 14.4168 25.45 14.4168C30.7317 14.4168 31.9833 17.2718 31.9833 22.5101V32.2134H26.6383V23.7034C26.6383 20.7201 25.9217 19.0368 24.1017 19.0368C21.5767 19.0368 20.5267 20.8518 20.5267 23.7034V32.2134H15.18V14.6468ZM6.01332 31.9851H11.36V14.4168H6.01332V31.9834V31.9851ZM12.125 8.68675C12.1351 9.14454 12.0536 9.59973 11.8854 10.0256C11.7172 10.4515 11.4656 10.8395 11.1454 11.1668C10.8252 11.4941 10.4428 11.7542 10.0207 11.9318C9.59868 12.1093 9.14539 12.2008 8.68749 12.2008C8.22959 12.2008 7.77631 12.1093 7.35423 11.9318C6.93216 11.7542 6.5498 11.4941 6.2296 11.1668C5.90941 10.8395 5.65781 10.4515 5.48959 10.0256C5.32137 9.59973 5.23991 9.14454 5.24999 8.68675C5.26978 7.78818 5.64063 6.93307 6.28313 6.30456C6.92563 5.67605 7.7887 5.32411 8.68749 5.32411C9.58628 5.32411 10.4493 5.67605 11.0918 6.30456C11.7343 6.93307 12.1052 7.78818 12.125 8.68675Z" fill="white" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/secot.ufscar/" target="_blank">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 10.7929C13.1328 10.7929 10.793 13.1328 10.793 15.9999C10.793 18.8671 13.1328 21.207 16 21.207C18.8672 21.207 21.207 18.8671 21.207 15.9999C21.207 13.1328 18.8672 10.7929 16 10.7929ZM31.6172 15.9999C31.6172 13.8437 31.6367 11.707 31.5156 9.55463C31.3945 7.05463 30.8242 4.83588 28.9961 3.00775C27.1641 1.17572 24.9492 0.609316 22.4492 0.488222C20.293 0.367129 18.1562 0.38666 16.0039 0.38666C13.8477 0.38666 11.7109 0.367129 9.5586 0.488222C7.0586 0.609316 4.83985 1.17963 3.01172 3.00775C1.17969 4.83978 0.613283 7.05463 0.49219 9.55463C0.371096 11.7109 0.390627 13.8476 0.390627 15.9999C0.390627 18.1523 0.371096 20.2929 0.49219 22.4453C0.613283 24.9453 1.1836 27.164 3.01172 28.9921C4.84375 30.8242 7.0586 31.3906 9.5586 31.5117C11.7148 31.6328 13.8516 31.6132 16.0039 31.6132C18.1602 31.6132 20.2969 31.6328 22.4492 31.5117C24.9492 31.3906 27.168 30.8203 28.9961 28.9921C30.8281 27.1601 31.3945 24.9453 31.5156 22.4453C31.6406 20.2929 31.6172 18.1562 31.6172 15.9999ZM16 24.0117C11.5664 24.0117 7.98828 20.4335 7.98828 15.9999C7.98828 11.5663 11.5664 7.98822 16 7.98822C20.4336 7.98822 24.0117 11.5663 24.0117 15.9999C24.0117 20.4335 20.4336 24.0117 16 24.0117ZM24.3398 9.53119C23.3047 9.53119 22.4688 8.69525 22.4688 7.6601C22.4688 6.62494 23.3047 5.789 24.3398 5.789C25.375 5.789 26.2109 6.62494 26.2109 7.6601C26.2113 7.9059 26.1631 8.14935 26.0691 8.3765C25.9752 8.60365 25.8374 8.81004 25.6636 8.98385C25.4898 9.15766 25.2834 9.29547 25.0562 9.38939C24.8291 9.48331 24.5856 9.5315 24.3398 9.53119Z" fill="white" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCmbNxHgz6oJ8s8t9iwHV9Fw" target="_blank">
                  <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.7695 4.56641C34.5703 3.82437 34.1797 3.14767 33.6367 2.60405C33.0938 2.06042 32.4176 1.66893 31.6758 1.46875C28.9453 0.734375 18 0.734375 18 0.734375C18 0.734375 7.05469 0.734375 4.32422 1.46484C3.58211 1.66437 2.90556 2.05565 2.36252 2.59937C1.81948 3.1431 1.42906 3.82014 1.23047 4.5625C0.5 7.29688 0.5 13 0.5 13C0.5 13 0.5 18.7031 1.23047 21.4336C1.63281 22.9414 2.82031 24.1289 4.32422 24.5312C7.05469 25.2656 18 25.2656 18 25.2656C18 25.2656 28.9453 25.2656 31.6758 24.5312C33.1836 24.1289 34.3672 22.9414 34.7695 21.4336C35.5 18.7031 35.5 13 35.5 13C35.5 13 35.5 7.29688 34.7695 4.56641ZM14.5234 18.2344V7.76562L23.5859 12.9609L14.5234 18.2344Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}



