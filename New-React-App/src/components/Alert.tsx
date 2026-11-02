interface AlertProps {
  children: string;
  onClose?: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert theme-warning alert-danger" role="alert">
      {children}
      <button type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
  )
}

export default Alert
