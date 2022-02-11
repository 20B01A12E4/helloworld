import React from 'react';
import Faker from'faker';
import faker from 'faker';
function CommentBox(){
    return(
        <div class="ui cards">
        <div class="card">
          <div class="content">
            <img class="right floated mini ui image" src={faker.image.image()}/>
            <div class="header">
              Elliot Fu
            </div>
            <div class="meta">
              Friends of Veronika
            </div>
            <div class="description">
              Elliot requested permission to view your contact details
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <div class="ui basic green button">Approve</div>
              <div class="ui basic red button">Decline</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <img class="right floated mini ui image" src={faker.image.image()}/>
            <div class="header">
              Jenny Hess
            </div>
            <div class="meta">
              New Member
            </div>
            <div class="description">
              Jenny wants to add you to the group <b>best friends</b>
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <div class="ui basic green button">Approve</div>
              <div class="ui basic red button">Decline</div>
            </div>
          </div>
        </div>
      </div>
      )
      }

export default CommentBox;