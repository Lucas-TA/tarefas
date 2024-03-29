import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../utils/enums/Task'
import { Button } from '../../styles'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parameter: 'status' | 'priority'
}

function returnBackgroundColor(props: TagProps): string {
  if (props.parameter === 'priority') {
    if (props.priority === enums.Priority.URGENT) return variables.red
    if (props.priority === enums.Priority.IMPORTANT) return variables.yellow2
  } else {
    if (props.status === enums.Status.PENDING) return variables.yellow
    if (props.status === enums.Status.COMPLETE) return variables.green
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => returnBackgroundColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`
export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto monospace', monospace;
  width: 100%;
  display: block;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`
export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const ButtonCancelOrRemove = styled(Button)`
  background-color: ${variables.red};
`
