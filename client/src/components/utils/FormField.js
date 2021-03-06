import React from "react"

const FormField = ({ formdata, change, id }) => {
  const showError = () => {
    let errorMessage = null
    if (formdata.validation && !formdata.valid) {
      errorMessage = <div className="error_label">{formdata.validationMessage}</div>
    }
    return errorMessage
  }
  const renderTemplate = () => {
    let formTemplate = null
    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div className="formBlock">
            <input
              {...formdata.config}
              value={formdata.value}
              onBlur={e => change({ e, id, blur: true })}
              onChange={e => {
                change({ e, id }) //every time onChange or onBlur we fire updateForm function
              }}
            />
            {showError()}
          </div>
        )
        break

      default:
        formTemplate = null
    }
    return formTemplate
  }
  return <div>{renderTemplate()}</div>
}

export default FormField
//84L
