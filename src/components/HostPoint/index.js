import React from 'react'
import s from './HostPoint.module.scss'
import getPictureUrl from '../../utils/getPictureUrl'
import placeholder from '../../img/ico/placeholder.png'

const HostPoint = ({hostPoint}) => {
    const {logoUrl} = hostPoint;

    return (
        <>
            <div className={s.rectcontainer}>
                <div className={s.rectangleleft}>
                    <div className={s.imgcontainer}>
                        <img
                            className={s.icon}
                            src={getPictureUrl('normal', {'normal': logoUrl})}
                            alt={hostPoint.productTitle}
                            onError={(e) => {
                                e.target.src = placeholder
                            }}
                        />
                    </div>
                </div>
                <div className={s.rectangleright}>
                    <div className={s.companyname}>
                        <div>{hostPoint.title}</div>
                        <div>{hostPoint.productNames}</div>
                    </div>
                    <div className={s.address}>
                        <span className={s.address1}>{hostPoint.address.substring(0, hostPoint.address.length/2)}</span>
                        <span className={s.address2}>{hostPoint.address.substring(hostPoint.address.length/2)}</span>
                    </div>
                </div>
            </div>
        </>)
};
export default HostPoint
