import React, { Component } from 'react';
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react'

const EditModal = (props) => {
	console.log(props);
		return(
			<Modal open={props.open}>
				<Header>Edit Mold</Header>
				<Modal.Content>
					<Form id='form' onSubmit={props.closeAndEdit}>
						<div id='inputs'>
							<Form.Input type='string' name='title' placeholder='give this thang a title' onChange={this.handleValueChange} />
							<p>I'd like my mix to lean...</p>
							<div id='sliders'>
								<Label>Acoustic</Label><Checkbox name='acoustic' onChange={this.handleEditChange} slider /><Label>Electric</Label><br />
								<Label>Danceable</Label><Checkbox name='danceable' onChange={this.handleEditChange} slider /><Label>...Not so Much</Label><br />
								<Label>High Energy</Label><Checkbox name='energetic' onChange={this.handleEditChange} slider /><Label>Chill</Label><br />
								<Label>Instrumental</Label><Checkbox name='instrumental' onChange={this.handleEditChange} slider /><Label>Vocals</Label><br />
								<Label>Live</Label><Checkbox name='live' onChange={this.handleEditChange} slider /><Label>Studio</Label><br />
								<Label>Spoken Word</Label><Checkbox name='spoken' onChange={this.handleEditChange} slider /><Label>Sung Straight Up</Label><br />
								<Label>Major</Label><Checkbox name='upbeat' onChange={this.handleEditChange} slider /><Label>Minor</Label><br />
							</div>
							<br />
						</div>
						<Button type='submit'>Save</Button>
					</Form>
				</Modal.Content>
			</Modal>
		)
	}
}
export default EditModal;
