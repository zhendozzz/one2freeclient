import React from 'react'
import s from './HostPoint.module.scss'
import getPictureUrl from '../../utils/getPictureUrl'

const HostPoint = ({hostPoint}) => {
    const {logoUrl, title} = hostPoint;
    const logoFullurl = getPictureUrl('normal', {'normal': logoUrl});
    let logo = logoUrl ? (
        <img
            className={s.icon}
            src={logoFullurl}
            alt={hostPoint.productTitle}
        />
    ) : (
        <div className={s.textlogo}>
            {title.substring(0, 1)}
        </div>
    );
    console.log(logo);
    return (
        <>
            <div className={s.rectcontainer}>
                <div className={s.rectangleleft}>
                    <div className={s.imgcontainer}>
                        {logo}
                    </div>
                </div>
                <div className={s.rectangleright}>
                    <div className={s.companyname}>
                        <div>{hostPoint.title}</div>
                        <div>{hostPoint.productNames}</div>
                    </div>
                    <div className={s.address}>
                        <span
                            className={s.address1}>{hostPoint.address.substring(0, hostPoint.address.length / 2)}</span>
                        <span className={s.address2}>{hostPoint.address.substring(hostPoint.address.length / 2)}</span>
                    </div>
                </div>
            </div>
        </>)
};
export default HostPoint
