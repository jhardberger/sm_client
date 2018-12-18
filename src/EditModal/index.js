import React, { Component } from 'react';
import { Modal, Form, Button, Label, Checkbox, Header } from 'semantic-ui-react'

const EditModal = (props) => {
	console.log(props);
		return(
			<Modal open={props.open}>
				<Header>Edit Mold</Header>
				<Modal.Content>
					<Form class='form' onSubmit={props.closeAndEdit}>
						<div class='inputs'>
							<Form.Input type='string' name='edit_title' placeholder='give this thang a title' onChange={props.handleEditChange} />
								This playlist is going to be...<br />
								<Label>Acoustic</Label>
								<Form.Checkbox name='edit_acoustic' onChange={props.handleEditChange} slider />
								<Label>Electric</Label><br />

								<Label>Danceable</Label>
								<Form.Checkbox name='edit_danceable' onChange={props.handleEditChange} slider />
								<Label>...Not so Much</Label><br />

								<Label>High Energy</Label>
								<Form.Checkbox name='edit_energetic' onChange={props.handleEditChange} slider />
								<Label>Chill</Label><br />

								<Label>Instrumental</Label>
								<Form.Checkbox name='edit_instrumental' onChange={props.handleEditChange} slider />
								<Label>Vocals</Label><br />

								<Label>Live</Label>
								<Form.Checkbox name='edit_live' onChange={props.handleEditChange} slider />
								<Label>Studio</Label><br />

								<Label>Spoken Word</Label>
								<Form.Checkbox name='edit_spoken' onChange={props.handleEditChange} slider />
								<Label>Sung Straight Up</Label><br />

								<Label>Major</Label>
								<Form.Checkbox name='edit_upbeat' onChange={props.handleEditChange} slider />
								<Label>Minor</Label><br />
							<br />
						</div>
						<Button type='submit'>Save</Button>
					</Form>
				</Modal.Content>
			</Modal>
		)
}

export default EditModal;
