import Image from "next/image"

export const W3FLogo: React.FC = () => (
  <a href="https://grants.web3.foundation/" target="_blank" rel="noreferrer">
    <svg viewBox="0 0 348 119" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M59.52 38.61V29.81C59.5214 28.2491 59.058 26.7232 58.1889 25.4267C57.3198 24.1302 56.0843 23.1218 54.64 22.53L0 0V4.88L48.67 24.88C49.1624 25.0937 49.5514 25.492 49.7534 25.9894C49.9553 26.4868 49.9541 27.0435 49.75 27.54C49.654 27.7846 49.5085 28.0068 49.3227 28.1926C49.1368 28.3785 48.9146 28.524 48.67 28.62L0 48.74V68.37L29.33 56.27L48.61 64.22C48.8569 64.3205 49.0813 64.4694 49.2699 64.6579C49.4584 64.8464 49.6074 65.0707 49.708 65.3176C49.8086 65.5645 49.8589 65.829 49.8558 66.0956C49.8527 66.3622 49.7963 66.6255 49.69 66.87C49.594 67.1146 49.4485 67.3368 49.2626 67.5227C49.0768 67.7085 48.8546 67.854 48.61 67.95L0 88.01V119.01L54.57 96.54C56.0143 95.9482 57.2498 94.9398 58.1189 93.6433C58.9879 92.3468 59.4514 90.8209 59.45 89.26V69.09C59.452 67.5277 58.989 66.0002 58.1199 64.702C57.2509 63.4038 56.0151 62.3935 54.57 61.8L35.24 53.8L54.57 45.85C56.033 45.2891 57.2904 44.2958 58.1747 43.0024C59.059 41.709 59.5283 40.1768 59.52 38.61Z"
        fill="white"
      />
      <path
        d="M104.52 7.25984C104.801 6.7696 105.215 6.36871 105.714 6.10334C106.213 5.83796 106.776 5.71889 107.34 5.75984C109.34 5.75984 111.02 7.40984 111.02 10.2398C111.02 13.0698 109.31 14.7198 107.34 14.7198C106.776 14.7608 106.213 14.6417 105.714 14.3763C105.215 14.111 104.801 13.7101 104.52 13.2198V17.3198H103.07V5.89984H104.52V7.25984ZM109.44 10.2598C109.44 8.25984 108.44 7.02984 106.97 7.02984C105.68 7.02984 104.46 8.02984 104.46 10.2598C104.46 12.4898 105.68 13.4898 106.97 13.4898C108.52 13.4698 109.46 12.2898 109.46 10.2398L109.44 10.2598Z"
        fill="white"
      />
      <path
        d="M116.13 7.35976C114.79 7.35976 114.13 8.10976 114.13 9.99976V14.5398H112.67V5.89976H114.09V7.40976C114.298 6.94134 114.639 6.54455 115.072 6.26891C115.504 5.99327 116.007 5.85097 116.52 5.85976H116.95V7.40976C116.65 7.38976 116.37 7.35976 116.13 7.35976Z"
        fill="white"
      />
      <path
        d="M121.7 14.7198C119.7 14.7198 117.58 13.3598 117.58 10.2398C117.58 7.11976 119.7 5.75977 121.7 5.75977C123.7 5.75977 125.83 7.11976 125.83 10.2398C125.83 13.3598 123.71 14.7198 121.7 14.7198ZM124.28 10.2398C124.28 7.94976 123.02 7.03976 121.7 7.03976C120.38 7.03976 119.13 7.88976 119.13 10.2398C119.13 12.5898 120.39 13.4398 121.7 13.4398C123.01 13.4398 124.28 12.4498 124.28 10.2398Z"
        fill="white"
      />
      <path
        d="M128.86 5.8982V14.8982C128.86 16.6882 128.49 17.2682 126.86 17.2682H126.12V16.0482H126.52C127.27 16.0482 127.41 15.8282 127.41 14.9282V5.8982H128.86ZM128.86 4.6682H127.4V2.9082H128.86V4.6682Z"
        fill="white"
      />
      <path
        d="M134.68 13.44C135.172 13.4874 135.667 13.3749 136.09 13.1191C136.513 12.8633 136.843 12.4779 137.03 12.02H138.52C138.28 12.8424 137.767 13.5584 137.065 14.0494C136.363 14.5404 135.515 14.777 134.66 14.72C131.94 14.72 130.44 12.72 130.44 10.23C130.394 9.65669 130.468 9.0801 130.657 8.53701C130.847 7.99393 131.147 7.49624 131.539 7.07569C131.932 6.65513 132.407 6.32095 132.936 6.09442C133.465 5.86789 134.035 5.75399 134.61 5.75999C137.24 5.75999 138.82 7.96999 138.61 10.69H132.02C132.006 11.0472 132.065 11.4034 132.193 11.7372C132.321 12.071 132.515 12.3755 132.763 12.6324C133.012 12.8893 133.31 13.0933 133.639 13.2321C133.968 13.3709 134.323 13.4416 134.68 13.44ZM137.11 9.43999C137.069 8.79519 136.785 8.19005 136.314 7.74777C135.843 7.30548 135.221 7.05928 134.575 7.05928C133.929 7.05928 133.307 7.30548 132.836 7.74777C132.365 8.19005 132.08 8.79519 132.04 9.43999H137.11Z"
        fill="white"
      />
      <path
        d="M146.04 8.77868C145.93 8.27369 145.647 7.82309 145.24 7.5052C144.832 7.18731 144.327 7.02224 143.81 7.03868C142.52 7.03868 141.33 8.03868 141.33 10.2087C141.33 12.3787 142.53 13.4387 143.81 13.4387C144.332 13.4563 144.845 13.2941 145.261 12.9792C145.678 12.6643 145.974 12.2158 146.1 11.7087H147.61C147.416 12.5758 146.927 13.3488 146.227 13.8958C145.527 14.4429 144.658 14.7301 143.77 14.7087C141.3 14.7087 139.77 12.8387 139.77 10.2187C139.77 7.59868 141.39 5.74868 143.93 5.74868C144.79 5.73253 145.628 6.02687 146.289 6.57782C146.95 7.12876 147.391 7.89942 147.53 8.74868L146.04 8.77868Z"
        fill="white"
      />
      <path
        d="M150.99 3.73828V5.89828H152.62V7.06828H150.99V12.1783C150.99 13.0683 151.06 13.2983 151.89 13.2983H152.62V14.5383H151.57C149.92 14.5383 149.57 14.1783 149.57 12.3783V7.06828H148.21V5.89828H149.52V3.73828H150.99Z"
        fill="white"
      />
      <path
        d="M160.95 6.98873C160.1 6.98873 159.14 7.29873 159.14 8.07873C159.14 8.85873 159.62 9.07873 160.45 9.24873L161.67 9.48873C163.23 9.78873 164.61 10.3787 164.61 12.0487C164.61 13.7187 163.07 14.7187 161.11 14.7187C160.227 14.7853 159.352 14.5116 158.664 13.9539C157.976 13.3961 157.528 12.5965 157.41 11.7187H158.94C159 12.243 159.266 12.7222 159.678 13.0519C160.09 13.3815 160.615 13.535 161.14 13.4787C162.24 13.4787 163.14 12.9987 163.14 12.1987C163.14 11.3987 162.32 10.9687 161.39 10.7787L160.11 10.5187C158.94 10.2787 157.66 9.72873 157.66 8.12873C157.66 6.52873 159.2 5.72873 161.11 5.72873C161.914 5.65878 162.715 5.89813 163.348 6.39798C163.982 6.89782 164.401 7.62052 164.52 8.41873H163C162.901 7.96604 162.635 7.56732 162.255 7.30223C161.875 7.03713 161.409 6.92517 160.95 6.98873Z"
        fill="white"
      />
      <path
        d="M168.92 14.7184C166.92 14.7184 166.17 13.3784 166.17 11.4084V5.89844H167.62V10.9784C167.62 12.3084 167.85 13.4584 169.43 13.4584C170.81 13.4584 171.62 12.4584 171.62 10.6384V5.89844H173.08V14.5384H171.62V13.3084C171.347 13.7723 170.949 14.1504 170.472 14.3996C169.994 14.6488 169.457 14.7593 168.92 14.7184Z"
        fill="white"
      />
      <path
        d="M176.65 7.25984C176.931 6.7696 177.345 6.36871 177.844 6.10334C178.343 5.83796 178.906 5.71889 179.47 5.75984C181.47 5.75984 183.15 7.40984 183.15 10.2398C183.15 13.0698 181.43 14.7198 179.47 14.7198C178.906 14.7608 178.343 14.6417 177.844 14.3763C177.345 14.111 176.931 13.7101 176.65 13.2198V17.3198H175.19V5.89984H176.65V7.25984ZM181.56 10.2598C181.56 8.25984 180.56 7.02984 179.1 7.02984C177.8 7.02984 176.58 8.02984 176.58 10.2598C176.58 12.4898 177.8 13.4898 179.1 13.4898C180.59 13.4698 181.52 12.2898 181.52 10.2398L181.56 10.2598Z"
        fill="white"
      />
      <path
        d="M186.22 7.25984C186.501 6.7696 186.915 6.36871 187.414 6.10334C187.913 5.83796 188.476 5.71889 189.04 5.75984C191.04 5.75984 192.72 7.40984 192.72 10.2398C192.72 13.0698 191.01 14.7198 189.04 14.7198C188.476 14.7608 187.913 14.6417 187.414 14.3763C186.915 14.111 186.501 13.7101 186.22 13.2198V17.3198H184.76V5.89984H186.22V7.25984ZM191.13 10.2598C191.13 8.25984 190.13 7.02984 188.67 7.02984C187.37 7.02984 186.16 8.02984 186.16 10.2598C186.16 12.4898 187.37 13.4898 188.67 13.4898C190.16 13.4698 191.13 12.2898 191.13 10.2398V10.2598Z"
        fill="white"
      />
      <path
        d="M197.97 14.7198C195.97 14.7198 193.84 13.3598 193.84 10.2398C193.84 7.11976 195.96 5.75977 197.97 5.75977C199.164 5.75977 200.308 6.23387 201.152 7.07778C201.996 7.9217 202.47 9.06629 202.47 10.2598C202.47 11.4532 201.996 12.5978 201.152 13.4417C200.308 14.2857 199.164 14.7598 197.97 14.7598V14.7198ZM200.52 10.2398C200.52 7.94976 199.26 7.03976 197.95 7.03976C196.64 7.03976 195.37 7.88976 195.37 10.2398C195.37 12.5898 196.63 13.4398 197.95 13.4398C199.27 13.4398 200.52 12.4498 200.52 10.2398Z"
        fill="white"
      />
      <path
        d="M207.19 7.35822C205.85 7.35822 205.19 8.10822 205.19 9.99822V14.5382H203.72V5.89822H205.15V7.40822C205.355 6.93739 205.695 6.53837 206.128 6.26225C206.561 5.98613 207.067 5.84545 207.58 5.85822H208.01V7.40822C207.71 7.38822 207.43 7.35822 207.19 7.35822Z"
        fill="white"
      />
      <path
        d="M211.58 3.73828V5.89828H213.22V7.06828H211.58V12.1783C211.58 13.0683 211.65 13.2983 212.48 13.2983H213.22V14.5383H212.16C210.51 14.5383 210.16 14.1783 210.16 12.3783V7.06828H208.8V5.89828H210.16V3.73828H211.58Z"
        fill="white"
      />
      <path
        d="M218.12 13.44C218.614 13.4864 219.109 13.3736 219.534 13.1181C219.958 12.8625 220.29 12.4777 220.48 12.02H221.98C221.74 12.8424 221.227 13.5584 220.525 14.0494C219.823 14.5404 218.975 14.777 218.12 14.72C215.4 14.72 213.9 12.72 213.9 10.23C213.856 9.65616 213.931 9.07937 214.122 8.53627C214.312 7.99316 214.613 7.49562 215.007 7.07524C215.4 6.65487 215.876 6.32086 216.405 6.09443C216.934 5.868 217.505 5.75411 218.08 5.75998C220.7 5.75998 222.29 7.96998 222.08 10.69H215.52C215.504 11.0428 215.559 11.3953 215.682 11.7263C215.805 12.0574 215.994 12.3603 216.236 12.617C216.479 12.8736 216.771 13.0788 217.094 13.2202C217.418 13.3616 217.767 13.4363 218.12 13.44ZM220.56 9.43998C220.56 8.76633 220.292 8.12027 219.816 7.64393C219.34 7.16759 218.694 6.89998 218.02 6.89998C217.346 6.89998 216.7 7.16759 216.224 7.64393C215.748 8.12027 215.48 8.76633 215.48 9.43998H220.56Z"
        fill="white"
      />
      <path
        d="M231.15 2.9082V14.5382H229.69V13.2482C229.409 13.7384 228.995 14.1393 228.496 14.4047C227.997 14.6701 227.434 14.7891 226.87 14.7482C224.87 14.7482 223.19 13.1182 223.19 10.2682C223.19 7.4182 224.9 5.7882 226.87 5.7882C227.434 5.74725 227.997 5.86632 228.496 6.1317C228.995 6.39707 229.409 6.79796 229.69 7.2882V2.9082H231.15ZM224.78 10.2382C224.78 12.2382 225.78 13.4682 227.24 13.4682C228.54 13.4682 229.75 12.4682 229.75 10.2382C229.75 8.0082 228.54 7.0082 227.24 7.0082C225.75 7.0082 224.78 8.1882 224.78 10.2382Z"
        fill="white"
      />
      <path
        d="M238.63 7.2582C238.911 6.76796 239.325 6.36707 239.824 6.1017C240.323 5.83632 240.886 5.71725 241.45 5.7582C243.45 5.7582 245.13 7.4082 245.13 10.2382C245.13 13.0682 243.42 14.7182 241.45 14.7182C240.886 14.7591 240.323 14.6401 239.824 14.3747C239.325 14.1093 238.911 13.7084 238.63 13.2182V14.5382H237.17V2.9082H238.63V7.2582ZM243.55 10.2582C243.55 8.2582 242.55 7.0282 241.08 7.0282C239.78 7.0282 238.57 8.0282 238.57 10.2582C238.57 12.4882 239.78 13.4882 241.08 13.4882C242.57 13.4682 243.52 12.2882 243.52 10.2382L243.55 10.2582Z"
        fill="white"
      />
      <path
        d="M249.78 14.8797C249.16 16.7597 248.71 17.3197 246.78 17.3197H246.02V16.0997H246.62C247.62 16.0997 248.04 16.0397 248.42 14.6897L248.52 14.5397L245.41 5.92969H247.03L249.22 12.5797L251.35 5.92969H252.87L249.78 14.8797Z"
        fill="white"
      />
      <path
        d="M115.37 35.2598L118.9 48.3898L122.3 35.2598H125.52L120.41 53.0198H117.67L113.74 38.7198L109.95 53.0198H107.22L102.1 35.2598H105.33L108.73 48.3898L112.27 35.2598H115.37Z"
        fill="white"
      />
      <path
        d="M134.95 50.799C135.965 50.8932 136.984 50.6595 137.857 50.1322C138.73 49.6049 139.411 48.8117 139.8 47.869H142.9C142.08 50.939 139.27 53.439 134.95 53.439C129.34 53.439 126.24 49.439 126.24 44.169C126.24 38.559 130 34.959 134.85 34.959C140.26 34.959 143.53 39.519 143.13 45.129H129.52C129.49 45.8613 129.609 46.5921 129.868 47.2776C130.128 47.9631 130.522 48.5892 131.029 49.1185C131.536 49.6479 132.145 50.0695 132.818 50.3583C133.492 50.647 134.217 50.7969 134.95 50.799ZM139.95 42.549C139.824 41.2538 139.221 40.0518 138.258 39.1768C137.295 38.3018 136.041 37.8165 134.74 37.8152C133.438 37.814 132.183 38.2969 131.218 39.1701C130.254 40.0432 129.648 41.2441 129.52 42.539L139.95 42.549Z"
        fill="white"
      />
      <path
        d="M149.24 38.0598C149.825 37.0544 150.678 36.2317 151.704 35.6841C152.731 35.1366 153.889 34.8858 155.05 34.9598C159.11 34.9598 162.64 38.3598 162.64 44.1998C162.64 50.0398 159.11 53.4398 155.05 53.4398C153.889 53.5139 152.731 53.2631 151.704 52.7156C150.678 52.168 149.825 51.3453 149.24 50.3398V53.0198H146.24V29.0898H149.24V38.0598ZM159.37 44.1998C159.37 39.9798 157.37 37.5398 154.29 37.5398C151.62 37.5398 149.11 39.5398 149.11 44.1998C149.11 48.8598 151.62 50.8698 154.29 50.8698C157.36 50.8698 159.37 48.4298 159.37 44.1998Z"
        fill="white"
      />
      <path
        d="M171.76 41.7591H171.26V39.0191H171.66C175.82 39.0191 178.03 37.8691 178.03 35.0191C178.03 32.4491 175.92 31.1291 173.37 31.1291C172.719 31.0774 172.065 31.1581 171.446 31.3663C170.828 31.5745 170.258 31.9059 169.771 32.3405C169.284 32.775 168.89 33.3038 168.613 33.8948C168.336 34.4858 168.182 35.1269 168.16 35.7791H165.06C165.42 31.5591 168.42 28.6191 173.44 28.6191C177.6 28.6191 181.2 30.2691 181.2 34.6891C181.201 35.9034 180.827 37.0884 180.129 38.0819C179.431 39.0754 178.443 39.8289 177.3 40.2391C180.87 41.3591 181.86 43.7291 181.86 46.2391C181.86 51.0591 177.76 53.3991 173.21 53.3991C167.6 53.3991 165.02 49.9091 164.69 45.9091H167.8C168.13 48.8491 169.87 50.9091 173.24 50.9091C176.41 50.9091 178.65 49.2591 178.65 46.2891C178.65 42.8791 175.58 41.7591 171.76 41.7591Z"
        fill="white"
      />
      <path
        d="M198.92 29.0898H200.52V31.5998H199.03C197.45 31.5998 197.18 31.9598 197.18 33.8098V35.2598H200.52V37.6698H197.18V53.0198H194.18V37.6698H191.7V35.2598H194.18V33.9698C194.13 30.2798 194.89 29.0898 198.92 29.0898Z"
        fill="white"
      />
      <path
        d="M210.05 53.439C205.93 53.439 201.54 50.639 201.54 44.199C201.54 37.759 205.93 34.959 210.05 34.959C214.17 34.959 218.57 37.769 218.57 44.199C218.57 50.629 214.18 53.439 210.05 53.439ZM215.37 44.199C215.37 39.479 212.76 37.599 210.05 37.599C207.34 37.599 204.74 39.349 204.74 44.199C204.74 49.049 207.35 50.799 210.05 50.799C212.75 50.799 215.37 48.759 215.37 44.199Z"
        fill="white"
      />
      <path
        d="M227.25 53.4398C223.13 53.4398 221.58 50.6698 221.58 46.6098V35.2598H224.58V45.7198C224.58 48.4598 225.04 50.8398 228.31 50.8398C231.15 50.8398 232.83 48.8398 232.83 45.0298V35.2598H235.83V53.0198H232.83V50.4698C232.269 51.4351 231.449 52.2245 230.463 52.7492C229.477 53.2739 228.364 53.513 227.25 53.4398Z"
        fill="white"
      />
      <path
        d="M248.76 34.959C253.06 34.959 254.61 37.729 254.61 41.789V53.019H251.61V42.679C251.61 39.949 251.15 37.569 247.72 37.569C244.81 37.569 243.03 39.569 243.03 43.379V53.019H240.03V35.259H243.03V37.929C243.619 36.954 244.465 36.1607 245.477 35.6366C246.488 35.1125 247.624 34.878 248.76 34.959Z"
        fill="white"
      />
      <path
        d="M273.98 29.0886V53.0186H270.98V50.3386C270.395 51.3441 269.542 52.1668 268.516 52.7143C267.489 53.2619 266.331 53.5127 265.17 53.4386C261.11 53.4386 257.58 50.0786 257.58 44.1986C257.58 38.3186 261.11 34.9586 265.17 34.9586C266.331 34.8845 267.489 35.1353 268.516 35.6829C269.542 36.2304 270.395 37.0531 270.98 38.0586V29.0586L273.98 29.0886ZM260.85 44.1986C260.85 48.4286 262.85 50.8686 265.93 50.8686C268.6 50.8686 271.11 48.8686 271.11 44.1986C271.11 39.5286 268.6 37.5386 265.93 37.5386C262.86 37.5386 260.85 39.9786 260.85 44.1986Z"
        fill="white"
      />
      <path
        d="M289.12 42.0891V41.6591C289.12 38.4291 287.3 37.3391 285.12 37.3391C282.65 37.3391 281.2 38.6891 281.06 40.8691H277.96C278.26 37.0391 281.62 34.8691 285.09 34.8691C289.98 34.8691 292.19 37.2091 292.15 42.1891V46.2891C292.076 48.5323 292.23 50.7772 292.61 52.9891H289.61C289.479 52.1784 289.402 51.36 289.38 50.5391C288.29 52.3591 286.44 53.4091 283.3 53.4091C279.97 53.4091 277.2 51.5691 277.2 48.2991C277.11 44.1391 281.83 42.9191 289.12 42.0891ZM280.44 48.2591C280.44 49.9491 281.73 51.0691 283.87 51.0691C286.68 51.0691 289.35 49.7791 289.35 45.5891V44.4691C283.91 45.0291 280.44 45.8191 280.44 48.2591Z"
        fill="white"
      />
      <path
        d="M299.8 30.7988V35.2588H303.17V37.6688H299.8V48.1988C299.8 50.0488 299.94 50.5088 301.65 50.5088H303.17V53.0188H300.99C297.59 53.0188 296.8 52.2588 296.8 48.5588V37.6688H294V35.2588H296.8V30.7988H299.8Z"
        fill="white"
      />
      <path
        d="M309.04 32.7198H306.04V29.0898H309.04V32.7198ZM309.04 53.0198H306.04V35.2598H309.04V53.0198Z"
        fill="white"
      />
      <path
        d="M320.75 53.439C316.62 53.439 312.23 50.639 312.23 44.199C312.23 37.759 316.62 34.959 320.75 34.959C324.88 34.959 329.26 37.769 329.26 44.199C329.26 50.629 324.87 53.439 320.75 53.439ZM326.06 44.199C326.06 39.479 323.45 37.599 320.75 37.599C318.05 37.599 315.43 39.349 315.43 44.199C315.43 49.049 318.04 50.799 320.75 50.799C323.46 50.799 326.06 48.759 326.06 44.199Z"
        fill="white"
      />
      <path
        d="M341.2 34.9597C345.49 34.9597 347.04 37.7297 347.04 41.7897V53.0197H344.04V42.6797C344.04 39.9497 343.58 37.5697 340.14 37.5697C337.24 37.5697 335.46 39.5697 335.46 43.3797V53.0197H332.46V35.2597H335.46V37.9297C336.049 36.9531 336.898 36.1588 337.911 35.6346C338.924 35.1104 340.062 34.8768 341.2 34.9597Z"
        fill="white"
      />
      <path
        d="M119.26 72.0188V87.3988C119.26 91.0288 118.6 92.5188 117.58 93.6388C116.781 94.4413 115.82 95.0649 114.761 95.4683C113.703 95.8717 112.571 96.0457 111.44 95.9788C107.44 95.9788 104.71 94.1288 104.15 90.5388H107.35C107.74 92.1188 108.7 93.3388 111.47 93.3388C112.134 93.3872 112.801 93.2946 113.426 93.0671C114.052 92.8396 114.622 92.4824 115.1 92.0188C115.76 91.3288 116.26 90.4988 116.26 88.0888V86.4088C115.707 87.4023 114.884 88.2183 113.885 88.7618C112.887 89.3053 111.754 89.554 110.62 89.4788C106.69 89.4788 103.09 86.3088 103.09 80.5988C103.09 74.8888 106.69 71.7188 110.62 71.7188C111.759 71.6474 112.894 71.9021 113.893 72.4529C114.892 73.0037 115.713 73.8279 116.26 74.8288V72.0188H119.26ZM106.36 80.5988C106.36 84.6588 108.44 86.9388 111.36 86.9388C114.04 86.9388 116.36 85.1188 116.36 80.5988C116.36 76.0788 114.02 74.2988 111.36 74.2988C108.44 74.2988 106.36 76.5388 106.36 80.5988Z"
        fill="white"
      />
      <path
        d="M130.61 75.0288C127.84 75.0288 126.45 76.5788 126.45 80.4688V89.7788H123.45V72.0188H126.38V75.1188C126.808 74.1537 127.51 73.3357 128.399 72.7667C129.288 72.1977 130.325 71.9028 131.38 71.9188C131.676 71.8995 131.974 71.8995 132.27 71.9188V75.1188C131.719 75.0596 131.164 75.0296 130.61 75.0288Z"
        fill="white"
      />
      <path
        d="M145.52 78.8489V78.4189C145.52 75.1889 143.7 74.0989 141.52 74.0989C139.05 74.0989 137.6 75.4489 137.46 77.6289H134.36C134.66 73.7989 138.02 71.6289 141.49 71.6289C146.37 71.6289 148.59 73.9689 148.55 78.9589V83.0489C148.476 85.2921 148.63 87.537 149.01 89.7489H146.01C145.881 88.9412 145.801 88.1264 145.77 87.3089C144.69 89.1189 142.84 90.1789 139.7 90.1789C136.37 90.1789 133.6 88.3289 133.6 85.0589C133.52 80.8989 138.2 79.6789 145.52 78.8489ZM136.84 85.0289C136.84 86.7089 138.13 87.8289 140.27 87.8289C143.08 87.8289 145.75 86.5389 145.75 82.3489V81.2289C140.27 81.7889 136.81 82.5389 136.81 85.0289H136.84Z"
        fill="white"
      />
      <path
        d="M161.23 71.7195C165.52 71.7195 167.07 74.4995 167.07 78.5595V89.7795H164.07V79.4495C164.07 76.7095 163.61 74.3295 160.17 74.3295C157.27 74.3295 155.49 76.3295 155.49 80.1395V89.7795H152.49V72.0195H155.49V74.6895C156.079 73.7129 156.928 72.9186 157.941 72.3944C158.954 71.8702 160.092 71.6366 161.23 71.7195Z"
        fill="white"
      />
      <path
        d="M174.82 67.5391V71.9891H178.19V74.3991H174.82V84.9291C174.82 86.7791 174.95 87.2391 176.67 87.2391H178.19V89.7491H176.01C172.61 89.7491 171.82 88.9891 171.82 85.2891V74.4291H169.01V72.0191H171.82V67.5391H174.82Z"
        fill="white"
      />
      <path
        d="M187.08 74.2695C185.33 74.2695 183.35 74.8895 183.35 76.5095C183.35 77.9295 184.35 78.5895 186.06 78.9195L188.57 79.4095C191.8 80.0395 194.64 81.2595 194.64 84.6995C194.64 88.1395 191.47 90.2095 187.41 90.2095C182.76 90.2095 180.12 87.1395 179.79 84.0395H182.96C183.093 85.1137 183.64 86.0937 184.484 86.7714C185.328 87.4492 186.402 87.7713 187.48 87.6695C189.75 87.6695 191.6 86.6695 191.6 85.0295C191.6 83.3895 189.92 82.4795 188 82.0895L185.36 81.5595C182.96 81.0595 180.36 79.9395 180.36 76.6395C180.36 73.5095 183.53 71.6895 187.46 71.6895C191.39 71.6895 193.9 73.8395 194.46 77.1995H191.32C190.81 75.0895 189.16 74.2695 187.08 74.2695Z"
        fill="white"
      />
      <path
        d="M209.12 74.829C209.704 73.8225 210.557 72.9984 211.584 72.4492C212.61 71.8999 213.768 71.6471 214.93 71.719C218.99 71.719 222.52 75.119 222.52 80.969C222.52 86.819 218.99 90.209 214.93 90.209C213.768 90.2833 212.608 90.0315 211.582 89.482C210.555 88.9325 209.703 88.1072 209.12 87.099V95.539H206.12V72.019H209.12V74.829ZM219.26 80.969C219.26 76.739 217.26 74.299 214.17 74.299C211.5 74.299 208.99 76.299 208.99 80.969C208.99 85.639 211.5 87.629 214.17 87.629C217.24 87.629 219.26 85.189 219.26 80.969Z"
        fill="white"
      />
      <path
        d="M232.86 75.0288C230.09 75.0288 228.7 76.5788 228.7 80.4688V89.7788H225.7V72.0188H228.64V75.1188C229.065 74.1521 229.767 73.3327 230.656 72.7634C231.546 72.194 232.584 71.9002 233.64 71.9188C233.936 71.8995 234.234 71.8995 234.53 71.9188V75.1188C233.975 75.0589 233.418 75.0289 232.86 75.0288Z"
        fill="white"
      />
      <path
        d="M244.18 90.2088C240.05 90.2088 235.66 87.3987 235.66 80.9688C235.66 74.5388 240.05 71.7188 244.18 71.7188C248.31 71.7188 252.69 74.5287 252.69 80.9688C252.69 87.4088 248.3 90.2088 244.18 90.2088ZM249.49 80.9688C249.49 76.2488 246.88 74.3588 244.18 74.3588C241.48 74.3588 238.86 76.1087 238.86 80.9688C238.86 85.8288 241.47 87.5688 244.18 87.5688C246.89 87.5688 249.52 85.5388 249.52 80.9688H249.49Z"
        fill="white"
      />
      <path
        d="M271 72.0194V87.3994C271 91.0294 270.34 92.5194 269.32 93.6394C268.521 94.4419 267.56 95.0655 266.501 95.4689C265.443 95.8723 264.311 96.0463 263.18 95.9794C259.18 95.9794 256.45 94.1294 255.88 90.5394H259.09C259.48 92.1194 260.44 93.3394 263.21 93.3394C263.874 93.3878 264.541 93.2952 265.166 93.0677C265.792 92.8402 266.362 92.483 266.84 92.0194C267.5 91.3294 268 90.4994 268 88.0894V86.4094C267.447 87.4045 266.622 88.2216 265.621 88.7652C264.621 89.3088 263.486 89.5565 262.35 89.4794C258.43 89.4794 254.83 86.3094 254.83 80.5994C254.83 74.8894 258.43 71.7194 262.35 71.7194C263.49 71.6461 264.628 71.8998 265.628 72.4507C266.629 73.0017 267.452 73.8269 268 74.8294V72.0194H271ZM258.1 80.5994C258.1 84.6594 260.17 86.9394 263.1 86.9394C265.78 86.9394 268.1 85.1194 268.1 80.5994C268.1 76.0794 265.76 74.2994 263.1 74.2994C260.17 74.2994 258.1 76.5394 258.1 80.5994Z"
        fill="white"
      />
      <path
        d="M282.35 75.0288C279.58 75.0288 278.19 76.5788 278.19 80.4688V89.7788H275.19V72.0188H278.12V75.1188C278.546 74.1529 279.248 73.3342 280.138 72.765C281.027 72.1959 282.064 71.9015 283.12 71.9188C283.416 71.8995 283.714 71.8995 284.01 71.9188V75.1188C283.459 75.06 282.904 75.03 282.35 75.0288Z"
        fill="white"
      />
      <path
        d="M297.23 78.8489V78.4189C297.23 75.1889 295.41 74.0989 293.23 74.0989C290.76 74.0989 289.3 75.4489 289.17 77.6289H286.07C286.37 73.7989 289.73 71.6289 293.2 71.6289C298.08 71.6289 300.29 73.9689 300.26 78.9589V83.0489C300.186 85.2921 300.34 87.537 300.72 89.7489H297.72C297.595 88.9409 297.518 88.1261 297.49 87.3089C296.4 89.1189 294.56 90.1789 291.42 90.1789C288.09 90.1789 285.31 88.3289 285.31 85.0589C285.21 80.8989 289.93 79.6789 297.23 78.8489ZM288.52 85.0289C288.52 86.7089 289.8 87.8289 291.95 87.8289C294.76 87.8289 297.43 86.5389 297.43 82.3489V81.2289C292.01 81.7889 288.52 82.5389 288.52 85.0289Z"
        fill="white"
      />
      <path
        d="M304.22 89.7787V72.0187H307.22V74.6887C307.748 73.7463 308.526 72.9678 309.469 72.4385C310.411 71.9093 311.48 71.6499 312.56 71.6887C315.27 71.6887 316.89 72.8787 317.68 74.8287C318.313 73.821 319.201 72.9994 320.255 72.4477C321.31 71.896 322.491 71.6341 323.68 71.6887C327.81 71.6887 329.42 74.4687 329.42 78.5287V89.7487H326.42V79.4487C326.42 76.7087 325.89 74.3287 322.63 74.3287C320.05 74.3287 318.33 76.3287 318.33 80.1387V89.7787H315.33V79.4487C315.33 76.7087 314.8 74.3287 311.54 74.3287C308.96 74.3287 307.25 76.3287 307.25 80.1387V89.7787H304.22Z"
        fill="white"
      />
    </svg>
  </a>
)
