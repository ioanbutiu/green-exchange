import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

export default function Footer(props) {
	return (
		<div className="container-fluid bg-secondary text-primary py-4 py-md-4">
			<div className="container px-0 px-md-4">
				<div className="d-flex flex-column flex-md-row  justify-content-between align-items-start py-3 py-md-5">
					<div className="mx-auto">
						<Link href="/">
							<svg width="154" height="88" viewBox="0 0 154 88" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_4847_2606)">
									<path
										d="M76.5752 69.2161C76.6892 68.7914 76.8546 68.4103 77.0714 68.0696C77.2882 67.7289 77.5516 67.4399 77.8647 67.1977C78.1762 66.9571 78.5327 66.773 78.9358 66.6471C79.3388 66.5211 79.7788 66.4581 80.259 66.4581C80.882 66.4581 81.4264 66.555 81.8889 66.7504C82.353 66.9458 82.7367 67.23 83.0402 67.6046C83.3437 67.9792 83.5605 68.4345 83.6906 68.969L82.9262 69.1402C82.8267 68.7203 82.6597 68.3603 82.4252 68.0632C82.1892 67.7644 81.8905 67.5351 81.5308 67.3753C81.1695 67.2154 80.7455 67.1347 80.259 67.1347C79.872 67.1347 79.5171 67.1864 79.1991 67.2897C78.8796 67.3931 78.5969 67.5416 78.3496 67.737C78.1023 67.9324 77.8952 68.1713 77.7282 68.4539C77.5612 68.7365 77.4327 69.0578 77.346 69.4163C77.2593 69.7764 77.2143 70.1703 77.2143 70.5982C77.2143 71.0261 77.2577 71.4088 77.346 71.7673C77.4327 72.1274 77.5612 72.4455 77.7282 72.7248C77.8952 73.0042 78.0991 73.2431 78.3384 73.4417C78.5777 73.6404 78.8539 73.7905 79.1654 73.8955C79.4769 73.9988 79.8222 74.0505 80.2028 74.0505C80.8258 74.0505 81.3509 73.9294 81.7765 73.6888C82.202 73.4482 82.5248 73.1075 82.7464 72.6683C82.9664 72.2291 83.0772 71.7108 83.0772 71.115L83.5108 71.3668C83.4883 71.8787 83.3951 72.3421 83.2313 72.7539C83.0675 73.1672 82.8411 73.5176 82.5537 73.8083C82.2646 74.0989 81.9194 74.3218 81.5163 74.4784C81.1133 74.635 80.654 74.7141 80.1369 74.7141C79.6809 74.7141 79.2585 74.6512 78.8715 74.5252C78.4845 74.3993 78.1377 74.2168 77.8342 73.9811C77.5307 73.7437 77.2721 73.4579 77.0586 73.1204C76.845 72.7846 76.6844 72.4035 76.5736 71.9804C76.4628 71.5558 76.4082 71.0956 76.4082 70.5982C76.4082 70.1009 76.466 69.6407 76.5784 69.2161H76.5752ZM80.1787 70.6661H83.7934V74.5995H83.2346L83.143 72.2727L83.0981 71.2974H80.1787V70.6677V70.6661Z"
										fill="#19E280"
									/>
									<path
										d="M85.8696 68.3732H86.5312L86.6228 70.2301V74.5979H85.8696V68.3716V68.3732ZM88.9833 69.095C88.9673 69.0869 88.9416 69.0821 88.903 69.0772C88.8645 69.074 88.8227 69.0708 88.7778 69.0708C88.5337 69.0708 88.3025 69.1095 88.0825 69.1854C87.8625 69.2613 87.6649 69.3727 87.4899 69.518C87.3149 69.6634 87.1623 69.8442 87.0339 70.0622C86.9038 70.2802 86.8042 70.524 86.732 70.7953C86.6597 71.0666 86.6244 71.3669 86.6244 71.6947L86.2936 71.3168C86.308 70.8744 86.3883 70.4675 86.5328 70.0961C86.6774 69.7263 86.8717 69.4034 87.1141 69.1273C87.3566 68.8528 87.6328 68.638 87.9411 68.4862C88.2495 68.3329 88.5738 68.257 88.9159 68.257H88.9785C88.9978 68.257 89.0106 68.2602 89.0186 68.2683L88.9849 69.0934L88.9833 69.095Z"
										fill="#19E280"
									/>
									<path
										d="M91.8049 74.5591C91.4821 74.4557 91.2011 74.3088 90.9618 74.1183C90.7225 73.9277 90.5202 73.6984 90.358 73.4304C90.1942 73.1624 90.0706 72.8653 89.9871 72.5359C89.9036 72.2065 89.8618 71.8512 89.8618 71.4701C89.8618 71.0891 89.9036 70.7548 89.9871 70.427C90.0706 70.0976 90.1942 69.8022 90.358 69.539C90.5218 69.2758 90.7209 69.0481 90.957 68.8575C91.193 68.667 91.4676 68.5201 91.784 68.4167C92.0987 68.3134 92.4472 68.2617 92.8278 68.2617C93.2758 68.2617 93.6757 68.3392 94.0257 68.4975C94.3758 68.6541 94.6713 68.8721 94.9153 69.1514C95.1578 69.4308 95.3441 69.7586 95.4742 70.138C95.6026 70.5175 95.6685 70.9276 95.6685 71.37C95.6685 71.4233 95.6669 71.4798 95.662 71.5363C95.6588 71.5945 95.6524 71.6461 95.6444 71.6914H90.2392L90.2504 71.0842H95.1305L94.9362 71.3943C94.9443 71.3636 94.9475 71.3394 94.9475 71.32V71.257C94.9394 70.9211 94.8896 70.6095 94.7997 70.3237C94.7082 70.0363 94.5733 69.7844 94.3951 69.5664C94.2168 69.3484 93.9984 69.1805 93.7399 69.061C93.4813 68.9431 93.1811 68.8834 92.839 68.8834C92.5355 68.8834 92.2657 68.9238 92.0297 69.0045C91.7936 69.0852 91.5865 69.2015 91.4082 69.3533C91.23 69.5067 91.0806 69.6891 90.9634 69.9039C90.8462 70.1186 90.7563 70.3576 90.6952 70.6208C90.6342 70.884 90.6037 71.1698 90.6037 71.475C90.6037 71.7802 90.6326 72.0676 90.6888 72.334C90.7466 72.6021 90.8333 72.8426 90.9506 73.0558C91.0678 73.2705 91.2187 73.4562 91.4002 73.6112C91.5833 73.7679 91.7968 73.889 92.0441 73.9729C92.2914 74.0569 92.5708 74.0989 92.8824 74.0989C93.2469 74.0989 93.5681 74.044 93.8459 73.9326C94.1237 73.8212 94.3533 73.6597 94.5364 73.4449C94.7194 73.2302 94.8559 72.9751 94.9475 72.6763L95.6428 72.8023C95.5288 73.2011 95.3537 73.5418 95.1177 73.8292C94.8816 74.115 94.5781 74.3363 94.2056 74.488C93.833 74.6414 93.3914 74.7173 92.8824 74.7173C92.4873 74.7173 92.1276 74.6657 91.8049 74.5623V74.5591Z"
										fill="#19E280"
									/>
									<path
										d="M99.0324 74.5591C98.7096 74.4557 98.4286 74.3088 98.1893 74.1183C97.9501 73.9277 97.7477 73.6984 97.5856 73.4304C97.4218 73.1624 97.2981 72.8653 97.2146 72.5359C97.1311 72.2065 97.0894 71.8512 97.0894 71.4701C97.0894 71.0891 97.1311 70.7548 97.2146 70.427C97.2981 70.0976 97.4218 69.8022 97.5856 69.539C97.7494 69.2758 97.9485 69.0481 98.1845 68.8575C98.4206 68.667 98.6952 68.5201 99.0115 68.4167C99.3279 68.3134 99.6747 68.2617 100.055 68.2617C100.503 68.2617 100.903 68.3392 101.253 68.4975C101.603 68.6541 101.899 68.8721 102.143 69.1514C102.385 69.4308 102.572 69.7586 102.702 70.138C102.83 70.5175 102.896 70.9276 102.896 71.37C102.896 71.4233 102.894 71.4798 102.89 71.5363C102.886 71.5945 102.88 71.6461 102.872 71.6914H97.4667L97.478 71.0842H102.358L102.164 71.3943C102.172 71.3636 102.175 71.3394 102.175 71.32V71.257C102.167 70.9211 102.119 70.6095 102.027 70.3237C101.936 70.0363 101.801 69.7844 101.623 69.5664C101.444 69.3484 101.226 69.1805 100.967 69.061C100.709 68.9431 100.409 68.8834 100.067 68.8834C99.7631 68.8834 99.4917 68.9238 99.2572 69.0045C99.0212 69.0852 98.814 69.2015 98.6358 69.3533C98.4575 69.5067 98.3082 69.6891 98.1909 69.9039C98.0737 70.1186 97.9838 70.3576 97.9228 70.6208C97.8618 70.884 97.8312 71.1698 97.8312 71.475C97.8312 71.7802 97.8602 72.0676 97.9164 72.334C97.9726 72.6021 98.0609 72.8426 98.1781 73.0558C98.2953 73.2705 98.4463 73.4562 98.6277 73.6112C98.8108 73.7679 99.0244 73.889 99.2717 73.9729C99.519 74.0569 99.7984 74.0989 100.11 74.0989C100.474 74.0989 100.796 74.044 101.073 73.9326C101.351 73.8212 101.581 73.6597 101.764 73.4449C101.947 73.2302 102.083 72.9751 102.175 72.6763L102.87 72.8023C102.756 73.2011 102.581 73.5418 102.345 73.8292C102.109 74.115 101.806 74.3363 101.433 74.488C101.061 74.6414 100.619 74.7173 100.11 74.7173C99.7149 74.7173 99.3552 74.6657 99.0324 74.5623V74.5591Z"
										fill="#19E280"
									/>
									<path
										d="M104.775 68.3732H105.437L105.494 69.6811C105.639 69.3824 105.827 69.1288 106.058 68.9189C106.289 68.709 106.553 68.5459 106.845 68.4313C107.137 68.3166 107.458 68.2601 107.808 68.2601C108.264 68.2601 108.66 68.3619 108.994 68.5637C109.328 68.7655 109.584 69.0417 109.763 69.3888C109.941 69.736 110.031 70.1364 110.031 70.5869V74.5995H109.278V70.7468C109.278 70.3948 109.212 70.0848 109.079 69.8183C108.945 69.5519 108.754 69.3371 108.502 69.1773C108.252 69.0174 107.943 68.9367 107.579 68.9367C107.29 68.9367 107.022 68.9884 106.774 69.0917C106.527 69.1951 106.31 69.342 106.124 69.5325C105.938 69.7231 105.792 69.9523 105.686 70.2204C105.58 70.4884 105.527 70.7823 105.527 71.1036V74.6011H104.773V68.3748L104.775 68.3732Z"
										fill="#19E280"
									/>
									<path d="M115.242 66.5728H116.04V74.5995H115.242V66.5728Z" fill="#19E280" />
									<path
										d="M118.629 68.3732H119.29L119.348 69.623C119.484 69.3404 119.656 69.0982 119.862 68.8948C120.067 68.6929 120.302 68.5363 120.568 68.4249C120.835 68.3151 121.124 68.2586 121.436 68.2586C121.778 68.2586 122.081 68.3199 122.348 68.4426C122.614 68.5654 122.836 68.7381 123.014 68.9642C123.192 69.1903 123.324 69.447 123.407 69.7376C123.505 69.5084 123.627 69.3033 123.772 69.1241C123.917 68.9448 124.082 68.7898 124.268 68.659C124.454 68.5282 124.66 68.4297 124.883 68.3603C125.108 68.2925 125.341 68.257 125.585 68.257C125.911 68.257 126.206 68.3135 126.468 68.4281C126.73 68.5428 126.952 68.7058 127.13 68.9158C127.308 69.1257 127.445 69.3727 127.541 69.6553C127.636 69.9379 127.684 70.2479 127.684 70.5838V74.5963H126.919V70.7323C126.919 70.3884 126.86 70.0832 126.743 69.8152C126.626 69.5487 126.451 69.334 126.218 69.1741C125.986 69.0143 125.702 68.9335 125.368 68.9335C125.095 68.9335 124.843 68.9852 124.615 69.0885C124.387 69.1919 124.193 69.3388 124.034 69.5293C123.875 69.7199 123.751 69.9492 123.663 70.2172C123.574 70.4853 123.531 70.7791 123.531 71.1005V74.5979H122.767V70.7339C122.767 70.39 122.707 70.0848 122.59 69.8168C122.473 69.5503 122.299 69.3356 122.071 69.1757C121.843 69.0159 121.558 68.9351 121.216 68.9351C120.943 68.9351 120.692 68.9868 120.469 69.0901C120.244 69.1935 120.051 69.3404 119.888 69.531C119.724 69.7215 119.598 69.9508 119.512 70.2188C119.423 70.4869 119.38 70.7807 119.38 71.1021V74.5995H118.627V68.3732H118.629Z"
										fill="#19E280"
									/>
									<path
										d="M130.716 70.3334V76.8924H129.962V68.3732H130.624L130.716 70.3334ZM131.889 74.4671C131.555 74.3024 131.27 74.0731 131.033 73.7792C130.797 73.4853 130.619 73.143 130.497 72.7539C130.375 72.3631 130.314 71.9481 130.314 71.5041C130.314 71.06 130.375 70.6321 130.497 70.243C130.619 69.8538 130.797 69.5099 131.033 69.2112C131.27 68.9125 131.554 68.68 131.889 68.512C132.223 68.3441 132.607 68.2601 133.041 68.2601C133.383 68.2601 133.698 68.315 133.987 68.4264C134.276 68.5379 134.529 68.6913 134.751 68.885C134.971 69.0804 135.157 69.3113 135.31 69.5777C135.462 69.8458 135.576 70.1397 135.652 70.461C135.727 70.7823 135.766 71.1262 135.766 71.4928C135.766 71.8593 135.727 72.2033 135.652 72.5246C135.576 72.8459 135.462 73.1398 135.31 73.4078C135.157 73.6759 134.971 73.9068 134.751 74.1022C134.531 74.2975 134.276 74.4477 133.987 74.5543C133.698 74.6608 133.383 74.7141 133.041 74.7141C132.607 74.7141 132.223 74.6318 131.889 74.4671V74.4671ZM133.622 73.9391C133.85 73.8519 134.049 73.7292 134.221 73.5725C134.391 73.4159 134.534 73.2302 134.648 73.0171C134.762 72.8023 134.847 72.5666 134.905 72.3066C134.963 72.0466 134.99 71.7754 134.99 71.4928C134.99 71.2102 134.961 70.9276 134.905 70.6677C134.847 70.4077 134.762 70.1703 134.648 69.9572C134.534 69.7424 134.391 69.5567 134.221 69.4017C134.049 69.2451 133.85 69.124 133.622 69.04C133.394 68.9561 133.139 68.9141 132.858 68.9141C132.41 68.9141 132.026 69.0287 131.706 69.258C131.387 69.4873 131.141 69.7973 130.971 70.1865C130.801 70.5756 130.714 71.0164 130.714 71.5057C130.714 71.8577 130.762 72.1903 130.857 72.5036C130.952 72.8168 131.095 73.0897 131.284 73.3239C131.473 73.5564 131.7 73.7405 131.962 73.8745C132.223 74.0085 132.522 74.0747 132.856 74.0747C133.137 74.0747 133.392 74.0311 133.62 73.9423L133.622 73.9391Z"
										fill="#19E280"
									/>
									<path
										d="M141.707 71.4234L139.416 71.6414C139.043 71.672 138.735 71.7399 138.492 71.848C138.248 71.9546 138.065 72.0967 137.94 72.2727C137.815 72.4487 137.752 72.6586 137.752 72.9041C137.752 73.1495 137.81 73.3723 137.922 73.5516C138.036 73.7308 138.2 73.8664 138.412 73.9585C138.624 74.0505 138.883 74.0957 139.188 74.0957C139.454 74.0957 139.705 74.0618 139.941 73.9924C140.177 73.9246 140.39 73.8261 140.585 73.7001C140.779 73.5742 140.948 73.4224 141.092 73.2464C141.237 73.0704 141.348 72.8766 141.423 72.6619C141.499 72.4471 141.537 72.2259 141.537 71.9966L141.879 72.1451C141.857 72.4584 141.794 72.7474 141.691 73.0106C141.588 73.2738 141.454 73.5112 141.287 73.7211C141.12 73.931 140.925 74.1102 140.705 74.2604C140.485 74.409 140.238 74.522 139.963 74.5979C139.69 74.6738 139.401 74.7125 139.096 74.7125C138.671 74.7125 138.303 74.6415 137.996 74.501C137.688 74.3589 137.45 74.1555 137.283 73.8874C137.116 73.6194 137.033 73.3029 137.033 72.9364C137.033 72.5698 137.116 72.2533 137.283 71.9901C137.45 71.7269 137.701 71.5186 138.036 71.3652C138.37 71.2118 138.789 71.1133 139.291 71.0681L141.651 70.8502L141.707 71.4234V71.4234ZM137.545 69.3533C137.689 69.1127 137.869 68.9125 138.086 68.751C138.303 68.5912 138.557 68.4685 138.851 68.3845C139.143 68.3005 139.461 68.2585 139.803 68.2585C140.175 68.2585 140.514 68.3021 140.818 68.3909C141.121 68.4798 141.378 68.617 141.587 68.8043C141.796 68.9916 141.956 69.2338 142.065 69.5325C142.176 69.8313 142.231 70.1865 142.231 70.5999V73.5354C142.231 73.6646 142.25 73.7728 142.289 73.8567C142.327 73.9407 142.382 74.0021 142.454 74.0392C142.526 74.078 142.611 74.0973 142.711 74.0973C142.733 74.0973 142.764 74.0957 142.802 74.0909C142.841 74.086 142.867 74.0844 142.883 74.0844L142.849 74.635C142.804 74.6496 142.748 74.6625 142.684 74.6689C142.619 74.677 142.56 74.6802 142.507 74.6802C142.293 74.6802 142.115 74.6415 141.971 74.5656C141.826 74.4897 141.719 74.3767 141.646 74.2265C141.574 74.078 141.539 73.8923 141.539 73.671V70.6564C141.539 70.327 141.497 70.0509 141.413 69.8248C141.33 69.5987 141.213 69.4163 141.06 69.2742C140.908 69.1321 140.726 69.032 140.513 68.9706C140.299 68.9093 140.06 68.8786 139.795 68.8786C139.461 68.8786 139.162 68.9319 138.9 69.0384C138.639 69.145 138.425 69.3016 138.261 69.5083C138.097 69.715 138.001 69.9782 137.971 70.2995L137.264 70.1962C137.309 69.8749 137.405 69.5939 137.548 69.3533H137.545Z"
										fill="#19E280"
									/>
									<path
										d="M148.834 70.5175C148.773 70.1817 148.661 69.8926 148.498 69.652C148.335 69.4114 148.119 69.2258 147.854 69.0966C147.588 68.9658 147.273 68.9012 146.909 68.9012C146.62 68.9012 146.361 68.9416 146.133 69.0223C145.905 69.103 145.706 69.2177 145.534 69.3662C145.362 69.5148 145.221 69.6972 145.107 69.9104C144.993 70.1251 144.908 70.3657 144.85 70.6322C144.794 70.9002 144.765 71.1892 144.765 71.5041C144.765 71.819 144.794 72.0951 144.85 72.3583C144.908 72.6215 144.994 72.8588 145.112 73.0688C145.229 73.2787 145.373 73.4595 145.545 73.6081C145.715 73.7566 145.918 73.8745 146.149 73.9568C146.38 74.0408 146.64 74.0828 146.929 74.0828C147.263 74.0828 147.564 74.0214 147.83 73.8987C148.097 73.776 148.318 73.5968 148.497 73.3594C148.675 73.122 148.807 72.8282 148.89 72.4762L149.608 72.6021C149.508 73.0542 149.337 73.4369 149.089 73.755C148.842 74.0731 148.537 74.3105 148.171 74.4719C147.806 74.6318 147.392 74.7125 146.928 74.7125C146.541 74.7125 146.192 74.6625 145.884 74.564C145.576 74.4639 145.304 74.3218 145.068 74.1345C144.832 73.9472 144.633 73.7211 144.469 73.4579C144.306 73.1931 144.182 72.8976 144.098 72.5698C144.015 72.2404 143.973 71.8852 143.973 71.5041C143.973 71.123 144.015 70.7549 144.098 70.4255C144.182 70.0961 144.304 69.799 144.463 69.5309C144.622 69.2629 144.823 69.0368 145.062 68.8495C145.301 68.6622 145.576 68.5169 145.882 68.4136C146.191 68.3102 146.531 68.2585 146.904 68.2585C147.405 68.2585 147.838 68.3425 148.203 68.5104C148.567 68.6784 148.864 68.9238 149.093 69.2451C149.321 69.5665 149.476 69.9491 149.56 70.3916L148.831 70.5175H148.834Z"
										fill="#19E280"
									/>
									<path
										d="M151.036 68.3732C151.15 68.3732 151.24 68.3635 151.304 68.3441C151.368 68.3264 151.418 68.2666 151.452 68.1665C151.485 68.0664 151.511 67.9081 151.526 67.6902C151.54 67.4722 151.553 67.1718 151.559 66.7908L152.049 68.3732H153.907V68.9916H150.35V68.3732H151.034H151.036ZM151.378 68.6719L151.561 68.3732V66.7908H152.142V72.8217C152.142 73.0736 152.173 73.2948 152.234 73.487C152.295 73.6775 152.409 73.8244 152.576 73.9278C152.743 74.0311 152.982 74.0828 153.294 74.0828C153.369 74.0828 153.446 74.0796 153.522 74.0715C153.597 74.0634 153.677 74.0553 153.761 74.0424C153.844 74.0311 153.925 74.0182 154 74.0021L153.966 74.6092C153.875 74.6318 153.779 74.6496 153.676 74.6609C153.573 74.6722 153.472 74.6835 153.374 74.6948C153.274 74.7061 153.176 74.7125 153.077 74.7125C152.804 74.7125 152.558 74.6786 152.341 74.6092C152.125 74.5398 151.946 74.4332 151.805 74.2879C151.664 74.1425 151.558 73.9585 151.485 73.7372C151.413 73.516 151.378 73.248 151.378 72.9347V68.6687V68.6719Z"
										fill="#19E280"
									/>
									<path
										d="M76.7808 77.5657H77.5789V85.5924H76.7808V77.5657V77.5657ZM77.3171 77.5657H82.027V78.2422H77.3171V77.5657ZM77.3171 81.131H81.5709V81.7962H77.3171V81.131ZM77.3171 84.9142H82.0607V85.5908H77.3171V84.9142Z"
										fill="#19E280"
									/>
									<path
										d="M82.7896 85.5924L85.2529 82.0836L85.5837 82.7828L83.5989 85.5924H82.7896ZM85.3332 82.7263L85.1614 82.5422L82.8923 79.3661H83.7354L85.5821 81.969L85.7411 82.1644L88.2269 85.5924H87.395L85.3316 82.7263H85.3332ZM85.3781 81.9916L87.2602 79.3661H88.0583L85.6977 82.6456L85.3781 81.9916Z"
										fill="#19E280"
									/>
									<path
										d="M94.0337 81.5104C93.9727 81.1746 93.8602 80.8856 93.6981 80.645C93.5343 80.4044 93.3191 80.2187 93.0541 80.0895C92.7876 79.9603 92.4728 79.8941 92.1083 79.8941C91.8193 79.8941 91.5607 79.9345 91.3327 80.0152C91.1047 80.096 90.9055 80.2106 90.7337 80.3592C90.5619 80.5077 90.4206 80.6902 90.3066 80.9033C90.1925 81.1165 90.1074 81.3587 90.0496 81.6251C89.9934 81.8931 89.9645 82.1838 89.9645 82.497C89.9645 82.8103 89.9934 83.088 90.0496 83.3512C90.1058 83.6144 90.1942 83.8518 90.3114 84.0617C90.4286 84.2732 90.5731 84.4524 90.7449 84.601C90.9152 84.7495 91.1175 84.8658 91.3487 84.9498C91.58 85.0337 91.8401 85.0757 92.1292 85.0757C92.4632 85.0757 92.7635 85.0144 93.03 84.8916C93.2966 84.7689 93.5182 84.5897 93.6965 84.3523C93.8747 84.115 94.0064 83.8211 94.0899 83.4691L94.8077 83.595C94.7097 84.0455 94.5363 84.4298 94.289 84.7479C94.0417 85.0644 93.7366 85.3034 93.3705 85.4649C93.006 85.6247 92.5917 85.7055 92.1276 85.7055C91.7406 85.7055 91.3921 85.6554 91.0838 85.5569C90.7755 85.4584 90.5041 85.3147 90.268 85.1274C90.032 84.9401 89.8328 84.714 89.6691 84.4508C89.5053 84.1876 89.3816 83.8905 89.2981 83.5627C89.2146 83.2333 89.1729 82.8781 89.1729 82.4954C89.1729 82.1127 89.2146 81.7462 89.2981 81.4184C89.3816 81.089 89.5036 80.7919 89.6626 80.5239C89.8216 80.2558 90.0223 80.0298 90.2616 79.8424C90.5009 79.6551 90.7755 79.5098 91.0822 79.4065C91.3905 79.3031 91.7309 79.2515 92.1035 79.2515C92.6045 79.2515 93.0381 79.3354 93.4026 79.5034C93.7671 79.6713 94.0642 79.9167 94.2922 80.2364C94.5202 80.5578 94.676 80.9405 94.7595 81.3829L94.0305 81.5088L94.0337 81.5104Z"
										fill="#19E280"
									/>
									<path
										d="M96.5197 76.9925H97.2728V80.6272C97.4173 80.3365 97.6036 80.0879 97.8316 79.8812C98.0597 79.6745 98.3198 79.5179 98.6121 79.4113C98.9043 79.3047 99.2175 79.2514 99.5531 79.2514C100.009 79.2514 100.404 79.3532 100.738 79.555C101.072 79.7585 101.329 80.033 101.507 80.3801C101.686 80.7273 101.776 81.1277 101.776 81.5782V85.5908H101.022V81.7381C101.022 81.3861 100.955 81.0761 100.823 80.8096C100.69 80.5416 100.499 80.3284 100.247 80.167C99.9963 80.0071 99.688 79.9264 99.3234 79.9264C99.0344 79.9264 98.7662 79.9781 98.5189 80.0814C98.2716 80.1847 98.0548 80.3317 97.8686 80.5222C97.6823 80.7144 97.5362 80.942 97.4302 81.2101C97.3242 81.4781 97.2712 81.772 97.2712 82.0933V85.5908H96.5181V76.9908L96.5197 76.9925Z"
										fill="#19E280"
									/>
									<path
										d="M108.059 82.4163L105.768 82.6343C105.395 82.665 105.087 82.7344 104.844 82.841C104.6 82.9475 104.417 83.0896 104.292 83.2656C104.167 83.4416 104.104 83.6515 104.104 83.897C104.104 84.1424 104.16 84.3653 104.276 84.5445C104.39 84.7237 104.554 84.8593 104.766 84.9514C104.978 85.0434 105.238 85.0886 105.541 85.0886C105.808 85.0886 106.058 85.0547 106.294 84.9853C106.53 84.9175 106.744 84.819 106.938 84.693C107.133 84.5671 107.301 84.4153 107.446 84.2409C107.59 84.0649 107.701 83.8695 107.777 83.6564C107.852 83.4433 107.891 83.2204 107.891 82.9911L108.233 83.1397C108.21 83.4529 108.147 83.742 108.045 84.0052C107.942 84.2684 107.807 84.5057 107.64 84.7156C107.473 84.9256 107.279 85.1048 107.059 85.2549C106.839 85.4035 106.591 85.5165 106.317 85.594C106.044 85.6699 105.755 85.7087 105.45 85.7087C105.024 85.7087 104.656 85.6376 104.35 85.4955C104.041 85.3534 103.804 85.15 103.637 84.882C103.47 84.6139 103.386 84.2958 103.386 83.9293C103.386 83.5627 103.47 83.2479 103.637 82.9831C103.804 82.7199 104.054 82.5116 104.39 82.3582C104.724 82.2048 105.143 82.1063 105.644 82.0594L108.005 81.8415L108.062 82.4147L108.059 82.4163ZM103.897 80.3462C104.041 80.1056 104.221 79.9054 104.438 79.7439C104.655 79.5841 104.91 79.4614 105.202 79.3774C105.495 79.2934 105.813 79.2515 106.155 79.2515C106.527 79.2515 106.866 79.2951 107.17 79.3839C107.473 79.4711 107.73 79.6099 107.939 79.7972C108.147 79.9845 108.308 80.2268 108.417 80.5255C108.528 80.8242 108.583 81.1794 108.583 81.5928V84.5283C108.583 84.6591 108.602 84.7657 108.639 84.8497C108.677 84.9336 108.732 84.995 108.804 85.0337C108.877 85.0725 108.962 85.0902 109.061 85.0902C109.084 85.0902 109.114 85.0886 109.153 85.0838C109.191 85.0806 109.217 85.079 109.233 85.079L109.199 85.6296C109.154 85.6441 109.098 85.657 109.034 85.6635C108.97 85.6715 108.91 85.6748 108.857 85.6748C108.644 85.6748 108.465 85.636 108.321 85.5601C108.176 85.4842 108.069 85.3712 107.997 85.2227C107.924 85.0741 107.889 84.8884 107.889 84.6672V81.6525C107.889 81.3231 107.847 81.047 107.764 80.821C107.68 80.5949 107.561 80.4124 107.41 80.2703C107.258 80.1283 107.076 80.0281 106.863 79.9652C106.649 79.9038 106.41 79.8747 106.145 79.8747C105.811 79.8747 105.512 79.928 105.251 80.0346C104.989 80.1412 104.775 80.2978 104.611 80.5045C104.448 80.7112 104.351 80.9744 104.321 81.2957L103.614 81.1923C103.659 80.871 103.756 80.5901 103.898 80.3495L103.897 80.3462Z"
										fill="#19E280"
									/>
									<path
										d="M110.784 79.3661H111.445L111.503 80.674C111.648 80.3753 111.836 80.1218 112.067 79.9119C112.298 79.7004 112.561 79.5389 112.854 79.4242C113.146 79.3096 113.467 79.2515 113.817 79.2515C114.273 79.2515 114.668 79.3532 115.002 79.555C115.336 79.7585 115.593 80.033 115.772 80.3801C115.95 80.7273 116.04 81.1278 116.04 81.5783V85.5908H115.287V81.7381C115.287 81.3861 115.221 81.0761 115.087 80.8097C114.954 80.5416 114.763 80.3285 114.511 80.167C114.26 80.0072 113.952 79.9264 113.588 79.9264C113.299 79.9264 113.03 79.9781 112.783 80.0814C112.536 80.1848 112.319 80.3317 112.133 80.5222C111.946 80.7144 111.8 80.9421 111.694 81.2101C111.588 81.4781 111.535 81.772 111.535 82.0934V85.5908H110.782V79.3645L110.784 79.3661Z"
										fill="#19E280"
									/>
									<path
										d="M118.93 85.1678C118.722 85.2599 118.559 85.3874 118.445 85.5521C118.331 85.7168 118.274 85.909 118.274 86.1302C118.274 86.3514 118.328 86.5549 118.439 86.7147C118.55 86.8746 118.701 87.007 118.895 87.1103C119.089 87.2136 119.322 87.2879 119.597 87.3348C119.87 87.38 120.175 87.4026 120.509 87.4026C120.873 87.4026 121.211 87.3751 121.517 87.3218C121.826 87.2685 122.089 87.1846 122.311 87.0699C122.531 86.9553 122.702 86.8116 122.825 86.6404C122.947 86.4693 123.008 86.2642 123.008 86.0268C123.008 85.7362 122.902 85.5101 122.688 85.3503C122.474 85.1904 122.148 85.1016 121.707 85.0871L119.073 85.0176V84.903C118.853 84.8949 118.661 84.8465 118.497 84.7544C118.333 84.6624 118.206 84.5381 118.115 84.3815C118.023 84.2248 117.978 84.0472 117.978 83.8486C117.978 83.6274 118.033 83.432 118.144 83.2641C118.254 83.0961 118.413 82.9605 118.622 82.8572C118.831 82.7538 119.088 82.6844 119.391 82.6456L119.528 82.9557C119.255 82.9863 119.043 83.0622 118.895 83.1849C118.747 83.3077 118.673 83.4788 118.673 83.7017C118.673 83.8389 118.706 83.96 118.77 84.0634C118.834 84.1667 118.927 84.2426 119.049 84.2926C119.171 84.3427 119.316 84.3701 119.483 84.3782L121.81 84.459C122.227 84.467 122.58 84.5316 122.87 84.6543C123.159 84.7771 123.377 84.945 123.525 85.1597C123.672 85.3745 123.746 85.6409 123.746 85.9622C123.746 86.2836 123.666 86.5952 123.507 86.8503C123.348 87.1055 123.123 87.3202 122.834 87.493C122.545 87.6658 122.198 87.7933 121.79 87.8773C121.384 87.9613 120.941 88.0032 120.462 88.0032C120.029 88.0032 119.632 87.9693 119.271 87.8999C118.91 87.8305 118.6 87.7239 118.341 87.5786C118.083 87.4332 117.882 87.2492 117.737 87.028C117.593 86.8067 117.521 86.5419 117.521 86.2368C117.521 85.9687 117.582 85.7362 117.704 85.5376C117.826 85.339 118.002 85.1759 118.233 85.0499C118.465 84.924 118.763 84.8384 119.128 84.7916L119.698 85.0322C119.395 85.0322 119.138 85.0774 118.929 85.1694L118.93 85.1678ZM121.445 79.371C121.742 79.4517 122.007 79.5745 122.243 79.7375C122.479 79.9023 122.666 80.1105 122.802 80.3624C122.939 80.6143 123.008 80.9131 123.008 81.257C123.008 81.5622 122.947 81.8351 122.825 82.0773C122.702 82.3179 122.529 82.5181 122.306 82.6795C122.081 82.8394 121.819 82.9621 121.519 83.0461C121.219 83.1301 120.89 83.172 120.533 83.172C120.177 83.172 119.852 83.1301 119.541 83.0461C119.229 82.9621 118.963 82.8394 118.743 82.6795C118.523 82.5197 118.348 82.3179 118.217 82.0773C118.087 81.8367 118.023 81.5638 118.023 81.257C118.023 80.9502 118.087 80.6628 118.217 80.4141C118.346 80.1654 118.521 79.9555 118.743 79.7844C118.963 79.6116 119.229 79.4808 119.541 79.3888C119.852 79.2967 120.183 79.2515 120.533 79.2515C120.845 79.2515 121.148 79.2919 121.445 79.3726V79.371ZM122.136 80.6434C122.049 80.4642 121.927 80.3124 121.771 80.1913C121.615 80.0686 121.432 79.9781 121.224 79.9168C121.015 79.8554 120.785 79.8247 120.533 79.8247C120.281 79.8247 120.061 79.8554 119.849 79.9168C119.635 79.9781 119.449 80.0702 119.29 80.1913C119.131 80.314 119.006 80.4642 118.914 80.6434C118.823 80.8226 118.778 81.0277 118.778 81.257C118.778 81.5476 118.857 81.7931 119.012 81.9965C119.168 82.2 119.378 82.3518 119.645 82.4551C119.912 82.5584 120.207 82.6101 120.535 82.6101C120.862 82.6101 121.154 82.5584 121.413 82.4551C121.672 82.3518 121.879 82.2016 122.034 82.0014C122.19 81.8028 122.269 81.5541 122.269 81.257C122.269 81.0277 122.226 80.8226 122.137 80.6434H122.136ZM122.279 79.9265C122.454 79.6439 122.661 79.4388 122.9 79.3129C123.139 79.1869 123.441 79.1353 123.807 79.1579L123.774 79.8231C123.47 79.8005 123.228 79.8167 123.049 79.8748C122.871 79.9313 122.706 80.0492 122.553 80.2252L122.28 79.9265H122.279Z"
										fill="#19E280"
									/>
									<path
										d="M126.616 85.5521C126.293 85.4487 126.012 85.3018 125.773 85.1112C125.534 84.9207 125.331 84.6914 125.169 84.4234C125.005 84.1553 124.882 83.8582 124.798 83.5288C124.715 83.1994 124.673 82.8442 124.673 82.4615C124.673 82.0788 124.715 81.7462 124.798 81.4184C124.882 81.089 125.005 80.7935 125.169 80.5303C125.333 80.2671 125.532 80.0394 125.768 79.8473C126.004 79.6568 126.279 79.5098 126.595 79.4065C126.91 79.3031 127.258 79.2515 127.639 79.2515C128.087 79.2515 128.487 79.3306 128.837 79.4872C129.187 79.6438 129.482 79.8618 129.726 80.1412C129.969 80.4205 130.155 80.7483 130.285 81.1278C130.414 81.5056 130.48 81.9173 130.48 82.3598C130.48 82.4131 130.478 82.468 130.473 82.5261C130.47 82.5826 130.463 82.6343 130.455 82.6811H125.05L125.061 82.074H129.942L129.747 82.384C129.755 82.3533 129.758 82.3291 129.758 82.3097V82.2467C129.75 81.9109 129.702 81.5993 129.611 81.3118C129.519 81.026 129.384 80.7725 129.206 80.5545C129.028 80.3366 128.809 80.1686 128.551 80.0491C128.292 79.9313 127.992 79.8715 127.65 79.8715C127.347 79.8715 127.075 79.9119 126.841 79.9926C126.605 80.0734 126.398 80.1896 126.219 80.3414C126.041 80.4948 125.892 80.6773 125.774 80.892C125.657 81.1068 125.567 81.3441 125.506 81.6089C125.445 81.8721 125.415 82.1579 125.415 82.4631C125.415 82.7683 125.444 83.0557 125.5 83.3238C125.556 83.5918 125.644 83.8324 125.762 84.0455C125.879 84.2603 126.03 84.4444 126.211 84.601C126.394 84.7576 126.608 84.8771 126.855 84.9611C127.102 85.045 127.382 85.087 127.693 85.087C128.058 85.087 128.379 85.0321 128.657 84.9207C128.935 84.8093 129.164 84.6478 129.347 84.4331C129.53 84.2183 129.667 83.9632 129.758 83.6645L130.454 83.7904C130.34 84.1876 130.165 84.53 129.929 84.8158C129.693 85.1032 129.389 85.3228 129.017 85.4762C128.644 85.6296 128.202 85.7055 127.693 85.7055C127.298 85.7055 126.939 85.6538 126.616 85.5504V85.5521Z"
										fill="#19E280"
									/>
									<path d="M74.467 0.526367H63.0127V57.6887H74.467V0.526367Z" fill="#19E280" />
									<path
										d="M110.656 28.0055L130.288 0.526367H117.124L104.085 18.7193L91.3392 0.526367H77.5789L97.1924 28.4544L76.2686 57.6887H89.3592L103.691 37.6614L117.802 57.6887H131.563L110.656 28.0055Z"
										fill="#19E280"
									/>
									<path
										d="M34.6922 31.1784V42.349H41.8526C38.5879 45.5671 34.1285 47.5629 29.2067 47.5629C19.2281 47.5629 11.1107 39.4005 11.1107 29.3667C11.1107 19.3329 19.2281 11.1706 29.2067 11.1706C37.6292 11.1706 44.727 16.9883 46.7343 24.8358H58.0633C55.889 10.7879 43.7779 0 29.2051 0C13.1019 0 0 13.1744 0 29.3667C0 45.559 13.1019 58.7334 29.2051 58.7334C36.192 58.7334 42.6073 56.2484 47.6367 52.1163V57.6903H58.7458V31.1784H34.6922Z"
										fill="#19E280"
									/>
								</g>
								<defs>
									<clipPath id="clip0_4847_2606">
										<rect width="154" height="88" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>
					<div className="d-flex flex-column flex-md-row w-100 gap-5 mt-5 mt-md-0">
						<div className="d-flex justify-content-between gap-5 ms-md-auto mx-4 mx-md-0">
							<a href="https://www.linkedin.com/company/green-impact-exchange/" target="_blank">
								<svg
									className="d-block border border-primary p-2"
									style={{ borderRadius: '1000px' }}
									width="40"
									height="40"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<rect width="24" height="24" />
									<path
										d="M19.65 3H4.35C3.6 3 3 3.6 3 4.275V19.65C3 20.325 3.6 20.925 4.35 20.925H19.65C20.4 20.925 21 20.325 21 19.65V4.275C21 3.6 20.4 3 19.65 3ZM8.325 18.3H5.7V9.75H8.325V18.3ZM7.05 8.55C6.225 8.55 5.475 7.875 5.475 6.975C5.475 6.075 6.15 5.4 7.05 5.4C7.875 5.4 8.625 6.075 8.625 6.975C8.625 7.875 7.875 8.55 7.05 8.55ZM18.375 18.225H15.75V14.025C15.75 13.05 15.75 11.7 14.325 11.7C12.9 11.7 12.75 12.825 12.75 13.875V18.15H10.125V9.75H12.6V10.875H12.675C13.05 10.2 13.95 9.45 15.225 9.45C17.925 9.45 18.45 11.25 18.45 13.575V18.225H18.375Z"
										fill="#19E280"
									/>
								</svg>
							</a>
							{/* <a target="_blank" href="/">
								<svg
									className="d-block border border-primary p-2"
									style={{ borderRadius: '1000px' }}
									width="40"
									height="40"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<rect width="24" height="24" />
									<path
										d="M16.8042 8.2758C17.4007 8.2758 17.8842 7.79227 17.8842 7.1958C17.8842 6.59933 17.4007 6.1158 16.8042 6.1158C16.2077 6.1158 15.7242 6.59933 15.7242 7.1958C15.7242 7.79227 16.2077 8.2758 16.8042 8.2758Z"
										fill="#19E280"
									/>
									<path
										d="M12 7.37835C11.0859 7.37835 10.1924 7.64941 9.43235 8.15724C8.67232 8.66507 8.07995 9.38688 7.73015 10.2314C7.38035 11.0759 7.28883 12.0051 7.46715 12.9016C7.64548 13.7982 8.08565 14.6217 8.732 15.268C9.37835 15.9144 10.2018 16.3545 11.0984 16.5328C11.9949 16.7112 12.9241 16.6196 13.7686 16.2698C14.6131 15.92 15.3349 15.3277 15.8428 14.5677C16.3506 13.8076 16.6217 12.9141 16.6217 12C16.6217 10.7743 16.1347 9.59873 15.268 8.732C14.4013 7.86527 13.2257 7.37835 12 7.37835ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15Z"
										fill="#19E280"
									/>
									<path
										d="M12 4.62165C14.4031 4.62165 14.6878 4.6308 15.6368 4.67415C16.2075 4.68094 16.7728 4.78577 17.308 4.98405C17.6961 5.13381 18.0486 5.36316 18.3428 5.65732C18.6369 5.95149 18.8663 6.30398 19.016 6.6921C19.2143 7.22731 19.3191 7.79261 19.3259 8.36333C19.3692 9.3123 19.3784 9.597 19.3784 12.0001C19.3784 14.4031 19.3693 14.6878 19.3259 15.6368C19.3191 16.2075 19.2143 16.7728 19.016 17.3081C18.8663 17.6962 18.6369 18.0487 18.3428 18.3428C18.0486 18.637 17.6961 18.8663 17.308 19.0161C16.7728 19.2144 16.2075 19.3192 15.6368 19.326C14.6879 19.3693 14.4033 19.3785 12 19.3785C9.5967 19.3785 9.31215 19.3694 8.36325 19.326C7.79253 19.3192 7.22723 19.2144 6.69202 19.0161C6.3039 18.8663 5.95142 18.637 5.65725 18.3428C5.36308 18.0487 5.13374 17.6962 4.98397 17.3081C4.78569 16.7728 4.68087 16.2075 4.67408 15.6368C4.6308 14.6878 4.62157 14.4031 4.62157 12.0001C4.62157 9.597 4.63072 9.3123 4.67408 8.36333C4.68087 7.79261 4.78569 7.22731 4.98397 6.6921C5.13373 6.30396 5.36307 5.95146 5.65724 5.65728C5.95141 5.3631 6.30389 5.13375 6.69202 4.98397C7.22723 4.78569 7.79253 4.68087 8.36325 4.67408C9.31222 4.6308 9.59693 4.62165 12 4.62165ZM12 3C9.55575 3 9.24922 3.01035 8.2893 3.05415C7.54279 3.06914 6.80422 3.21059 6.105 3.4725C5.50705 3.70374 4.96401 4.05735 4.51068 4.51068C4.05735 4.96401 3.70374 5.50705 3.4725 6.105C3.21055 6.80434 3.06909 7.54304 3.05415 8.28968C3.01035 9.24923 3 9.55575 3 12C3 14.4443 3.01035 14.7508 3.05415 15.7107C3.0691 16.4573 3.21056 17.196 3.4725 17.8954C3.70374 18.4933 4.05735 19.0364 4.51068 19.4897C4.96401 19.943 5.50705 20.2966 6.105 20.5279C6.80434 20.7898 7.54304 20.9313 8.28968 20.9462C9.24923 20.9897 9.55575 21 12 21C14.4443 21 14.7508 20.9896 15.7107 20.9459C16.4573 20.9309 17.196 20.7894 17.8954 20.5275C18.4933 20.2963 19.0364 19.9426 19.4897 19.4893C19.943 19.036 20.2966 18.493 20.5279 17.895C20.7898 17.1957 20.9313 16.457 20.9462 15.7103C20.9897 14.7508 21 14.4443 21 12C21 9.55575 20.9896 9.24922 20.9459 8.2893C20.9309 7.54279 20.7894 6.80422 20.5275 6.105C20.2962 5.50712 19.9426 4.96415 19.4893 4.51089C19.0359 4.05763 18.4929 3.70407 17.895 3.47287C17.1957 3.21093 16.457 3.06948 15.7103 3.05453C14.7508 3.01035 14.4443 3 12 3Z"
										fill="#19E280"
									/>
								</svg>
							</a> */}
							{/* <a href="/" target="_blank">
								<svg
									className="d-block border border-primary p-2"
									style={{ borderRadius: '1000px' }}
									width="40"
									height="40"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<rect width="24" height="24" />
									<path
										d="M8.94 18.705C10.2069 18.713 11.4627 18.4693 12.6346 17.9882C13.8066 17.507 14.8714 16.798 15.7672 15.9022C16.663 15.0064 17.3721 13.9416 17.8532 12.7696C18.3343 11.5977 18.578 10.3418 18.57 9.07499C18.57 8.92499 18.57 8.78249 18.57 8.63249C19.2267 8.15136 19.7951 7.56012 20.25 6.88499C19.6316 7.15544 18.9773 7.3348 18.3075 7.41749C19.0177 6.99432 19.5506 6.32824 19.8075 5.54249C19.1456 5.93957 18.4199 6.21871 17.6625 6.36749C17.1524 5.82401 16.4775 5.46378 15.7421 5.34253C15.0067 5.22128 14.2518 5.34576 13.5943 5.69673C12.9368 6.04769 12.4132 6.60557 12.1047 7.28405C11.7962 7.96252 11.7198 8.72376 11.8875 9.44999C10.542 9.38395 9.22553 9.03525 8.02377 8.42662C6.822 7.81798 5.7619 6.96305 4.9125 5.91749C4.48419 6.66087 4.35437 7.53923 4.54932 8.37473C4.74427 9.21023 5.24942 9.94043 5.9625 10.4175C5.43646 10.3972 4.92259 10.2533 4.4625 9.99749V10.035C4.45783 10.8119 4.71954 11.5669 5.20403 12.1742C5.68851 12.7815 6.3665 13.2044 7.125 13.3725C6.63573 13.5041 6.12322 13.5246 5.625 13.4325C5.84459 14.095 6.26376 14.6734 6.82503 15.0883C7.38631 15.5032 8.06219 15.7344 8.76 15.75C7.56691 16.7104 6.08407 17.239 4.5525 17.25C4.28396 17.2422 4.01606 17.2197 3.75 17.1825C5.30022 18.1702 7.1019 18.6909 8.94 18.6825"
										fill="#19E280"
									/>
								</svg>
							</a> */}
						</div>
						<Link href="/contact">
							<a className="text-link align-self-center text-primary">Contact us</a>
						</Link>
					</div>
				</div>
				<hr />
				<div className="d-flex justify-content-between pt-3">
					<small className="text-muted">©2022 GIX Inc.</small>
					<div className="d-flex gap-4">
						<Link href="/sitemap">
							<a className="text-muted">
								<small className="text-primary">Sitemap</small>
							</a>
						</Link>
						<Link href="/privacy-policy">
							<a className="text-muted">
								<small className="text-primary">Privacy Policy</small>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
