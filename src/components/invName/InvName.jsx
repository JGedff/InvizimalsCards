import Icon from '../icon/Icon'

export default function InvName({ name, elementSrc }) {
    return (
        <div className="d-flex">
            <Icon src={elementSrc} />
            {name}
        </div>
    )
}