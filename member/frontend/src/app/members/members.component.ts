import { Component, OnInit } from '@angular/core';
import { MemberService } from "./service/member.service";
import { Member } from "../models/memberModel";
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService],
})
export class MembersComponent implements OnInit {

  public members: Member[];
  public member: Member;
  public searchText: string;
  public showAddModal: boolean;
  public showEditModal: boolean;
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.member = new Member();
    this.members = [];
    this.getAllMembers();
  }

  /**
   * Gets All Members
   */
  getAllMembers() {
    this.memberService.getAll().subscribe(
      (response) => {
        this.members = response;
      },
      (err) => {
        console.log(err.message);
        alert("Couldn't retreive data from server.");
      }
    )
  }

  createNewMember() {
    this.memberService.create(this.member).subscribe(
      (response) => {
        this.members.push(response);
      },
      (err) => {
        console.log(err.message);
        alert("Couldn't create a member.");
      }
    )
    this.cancelModel();
  }

  deleteMember(id: string) {
    this.memberService.delete(id).subscribe(
      (response) => {
        this.getAllMembers();
      },
      (err) => {
        console.log(err.message);
        alert("Couldn't delete a member.");
      }
    )
  }

  updateMember() {
    this.memberService.update(this.member, this.member._id).subscribe(
      (response) => {
        this.getAllMembers();
      },
      (err) => {
        console.log(err.message);
        alert("Couldn't update a member.");
      }
    )
    this.cancelModel();
  }

  openAddModel(showAddModal: boolean) {
    this.member = new Member();
    this.showAddModal = showAddModal;
    this.showEditModal = !this.showAddModal;
  }

  openEditModel(showEditModal: boolean, member: Member) {
    this.member = member;
    this.showEditModal = showEditModal;
    this.showAddModal = !this.showEditModal;
  }

  cancelModel(){
    this.member = new Member();
    this.showAddModal = false;
    this.showEditModal = false;
  }

}
