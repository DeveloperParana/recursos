import { BuiltInElement, html } from '@devpr/common-web'

@BuiltInElement('devpr-meetup', 'a')
export class MeetUp extends HTMLAnchorElement {
  href = 'https://www.meetup.com/pt-BR/developerparana'

  /**
   * O uso do atributo target como _blank
   * exige que seja em conjunto com o rel
   * por motivos de segurança, segue link
   * para acompanhar a issue no repositório
   *
   * @see
   * https://github.com/whatwg/html/issues/4078
   *
   * @memberof GitHub
   */
  target = '_blank'
  rel = 'noopener'
  alt = 'MeetUp'

  innerHTML = html`
    <svg
      width="40"
      height="40"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>MeetUp</title>
      <rect width="128" height="128" fill="#F64060" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30 90.9999C30 90.9999 20 52.2999 36.6 38.5999C53.1 24.8999 75.5 25.0999 90 32.9999L128 70.9999V128H67.1L30 90.9999Z"
        fill="#D33450"
      />
      <path
        d="M101.688 78.2836C101.696 87.3807 95.2044 95.2174 86.3765 96.7583C85.265 96.9508 84.1426 97.0647 83.0146 97.0539C82.6343 97.0497 82.4849 97.2033 82.3643 97.5549C80.6018 102.661 77.0847 105.705 71.7715 106.473C68.2567 106.98 65.0672 106.029 62.2713 103.811C61.8818 103.502 61.6437 103.497 61.2376 103.79C57.9675 106.15 54.3009 107.196 50.297 106.951C42.4839 106.475 35.9099 100.449 34.6801 92.6789C34.5956 92.1418 34.5056 91.6006 34.4975 91.0593C34.4894 90.6091 34.32 90.4354 33.8939 90.3512C31.5284 89.8859 29.3819 88.9028 27.4881 87.4069C24.0028 84.6532 21.9117 81.0578 21.425 76.6104C20.8699 71.5201 22.4279 67.1189 25.9762 63.4513C26.2623 63.157 26.2801 62.9521 26.085 62.6061C24.7209 60.2029 24.0743 57.6 24.1793 54.8397C24.4412 47.9509 29.1915 42.2595 35.799 40.8504C36.5634 40.6865 36.9642 40.384 37.3002 39.653C40.5592 32.5675 46.0314 28.2582 53.625 26.8369C58.9556 25.8386 63.9842 26.9075 68.6505 29.6771C69.0428 29.9106 69.3712 29.9294 69.7957 29.8046C77.2071 27.6347 83.7741 29.2133 89.3493 34.5629C92.6464 37.7257 94.4529 41.7286 94.9877 46.2951C95.1048 47.2934 95.1581 48.3011 95.0828 49.3048C95.0545 49.6845 95.1702 49.8432 95.5263 49.9761C98.8674 51.2241 101.171 53.5514 102.179 56.9937C103.435 61.2755 102.38 65.0303 99.2093 68.1524C98.9346 68.4234 98.9926 68.5894 99.1483 68.8602C100.824 71.7734 101.692 74.909 101.688 78.2836ZM68.6184 76.8229C68.6212 80.6936 71.0835 84.1147 74.5754 85.2771C76.3254 85.8603 78.1304 86.1369 79.9626 86.2183C81.2706 86.2752 82.5764 86.1831 83.785 85.5752C84.7353 85.0964 85.183 84.3056 85.14 83.2519C85.097 82.1913 84.6263 81.398 83.621 80.9759C83.2716 80.8293 82.9168 80.71 82.5457 80.645C81.4368 80.4453 80.3225 80.2772 79.2191 80.0565C77.398 79.6905 76.6344 78.7178 76.6102 76.8595C76.589 75.2157 77.031 73.6653 77.5321 72.1314C78.4489 69.3238 79.685 66.6479 80.8697 63.95C82.0133 61.3447 83.2121 58.7608 84.02 56.0167C84.4649 54.5099 84.6773 52.999 84.2727 51.4406C83.6571 49.0752 82.2524 47.4897 79.8303 47.0338C77.6128 46.6174 75.4056 46.57 73.4003 47.9045C72.7335 48.3467 72.0923 48.241 71.5134 47.7254C71.0713 47.3334 70.6505 46.9184 70.2177 46.5156C68.1721 44.61 65.4677 44.5164 63.2717 46.2567C62.3856 46.9592 61.6399 47.8302 60.6774 48.4405C59.8173 48.9856 58.95 49.1401 57.9976 48.6276C57.0903 48.1392 56.1509 47.7094 55.2139 47.2808C54.2648 46.8483 53.3455 46.3139 52.2772 46.223C48.898 45.9327 45.3618 47.9591 43.8712 51.0394C43.2097 52.4025 42.6697 53.8186 42.1577 55.2439C39.7932 61.8331 37.8673 68.5632 35.8741 75.2701C34.9814 78.2718 36.0349 81.2255 38.5537 82.8467C40.5188 84.1105 42.6705 84.423 44.8981 83.7475C46.7028 83.1994 47.6911 81.7335 48.3818 80.0867C50.6773 74.6236 52.7447 69.0677 54.9328 63.5612C55.535 62.046 56.118 60.5243 56.7569 59.0255C57.4019 57.512 59.2553 56.9965 60.3547 58.0002C61.0258 58.6129 61.2027 59.4285 61.137 60.3004C61.0647 61.2324 60.7069 62.0919 60.3709 62.9479C58.9472 66.5801 57.4972 70.2018 56.0671 73.8312C55.7781 74.5652 55.4649 75.2933 55.3371 76.0811C55.1182 77.4338 55.6489 78.6328 56.7454 79.11C57.864 79.5971 59.0253 79.6785 60.1849 79.2537C61.5344 78.7601 62.3408 77.6941 62.962 76.4623C65.0965 72.2324 67.2145 67.992 69.3476 63.7619C70.333 61.8077 71.3355 59.8626 72.3421 57.92C72.7161 57.2 73.1542 56.5177 73.8529 56.0701C74.4837 55.6673 75.1633 55.6373 75.8099 56.0037C76.4408 56.3604 76.483 57.0116 76.4565 57.6545C76.442 58.0002 76.3462 58.338 76.2144 58.6594C75.9379 59.3279 75.6796 60.0064 75.3729 60.6617C73.5988 64.428 71.7977 68.1798 70.0394 71.9543C69.2983 73.5473 68.5269 75.1479 68.6184 76.8229ZM93.504 104.58C93.5081 102.082 91.4329 99.9929 88.9367 99.9861C86.3789 99.9767 84.3038 102.042 84.2928 104.605C84.2821 107.109 86.3926 109.235 88.8884 109.238C91.4194 109.241 93.5 107.141 93.504 104.58ZM16.3444 66.2949C18.7517 66.3003 20.7772 64.2699 20.7677 61.8625C20.7568 59.451 18.7745 57.4516 16.3874 57.4448C13.9409 57.4382 11.9986 59.3969 12 61.8695C12.002 64.3161 13.9386 66.2895 16.3444 66.2949ZM70.2476 16.7765C67.8282 16.7629 65.8564 18.7147 65.8427 21.1343C65.8281 23.5513 67.793 25.5371 70.2002 25.5397C72.598 25.5411 74.5239 23.6029 74.5282 21.1817C74.534 18.7487 72.6293 16.7886 70.2476 16.7765ZM105.868 44.1678C105.858 42.1616 104.163 40.4554 102.167 40.4418C100.129 40.427 98.4031 42.1646 98.4168 44.2165C98.4312 46.2633 100.077 47.9043 102.117 47.9071C104.219 47.9113 105.88 46.2539 105.868 44.1678ZM29.5515 33.4552C29.5515 35.3393 31.0045 36.8176 32.8593 36.8204C34.738 36.823 36.1954 35.3367 36.1886 33.4255C36.1819 31.5716 34.7263 30.1215 32.8781 30.1271C30.9773 30.1309 29.5524 31.5564 29.5515 33.4552ZM64.2986 111.161C64.3146 109.592 63.0351 108.3 61.4625 108.294C59.8482 108.289 58.5804 109.551 58.5845 111.159C58.5887 112.744 59.85 114 61.4359 114C63.0205 114.001 64.2849 112.748 64.2986 111.161ZM108.667 66.5745C107.156 66.5635 105.845 67.8861 105.857 69.4093C105.87 70.9146 107.116 72.1504 108.624 72.1534C110.204 72.1564 111.39 70.9818 111.394 69.4053C111.398 67.8453 110.184 66.5853 108.667 66.5745ZM42.308 14C40.976 13.9946 39.9479 15.0213 39.9479 16.3589C39.9479 17.688 40.9867 18.7215 42.3175 18.7147C43.6091 18.7079 44.6212 17.6688 44.6212 16.3491C44.6214 15.0171 43.6251 14.0068 42.308 14ZM113.938 53.9062C112.852 53.8938 111.868 54.8745 111.855 55.9854C111.84 57.1342 112.788 58.0903 113.943 58.0931C115.091 58.0973 115.992 57.1966 116 56.0329C116.011 54.8625 115.097 53.921 113.938 53.9062ZM31.718 95.2854C31.7232 94.1732 30.7729 93.2156 29.6535 93.205C28.5188 93.1952 27.586 94.1586 27.5941 95.3304C27.6034 96.4752 28.5241 97.3796 29.6709 97.3716C30.7961 97.3646 31.7143 96.43 31.718 95.2854Z"
        fill="white"
      />
    </svg>

    <span>MeetUp</span>
  `
}
