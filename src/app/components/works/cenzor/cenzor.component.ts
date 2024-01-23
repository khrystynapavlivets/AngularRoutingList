import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cenzor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cenzor.component.html',
  styleUrl: './cenzor.component.scss'
})
export class CenzorComponent {
  public BadWords: string[] = [];
  public allBadWords: string[] = [];
  public badWordInput = 'bad-word';
  public addWordButton = 'add-word';
  public resetInputButton = 'reset-input';
  public inputBox = 'box-input'
  public textArea = 'text';
  public cenzorButton = 'cenzor';
  public badWordsList = 'red-word';
  public badWords = 'bad-words';
  public placeholder = 'word here..';
  public placeholderTextarea = 'text here..';
  public listBadWords = 'Java tottenham';
  public box = 'box';
  public container = 'container';
  public headerBox = 'header';


  public isColor = true;
  public isText = true;
  public newWord!: string;
  public text = '';


  addWord(newWord: string): void {
    if (newWord.trim() !== '') {
      if (!this.BadWords.includes(newWord)) {
        this.BadWords.push(newWord);
        this.newWord = '';
        this.isColor = true;
        this.placeholder = 'word here...';
      }
    } else {
      this.isColor = false;
      this.placeholder = 'Please write a word!';
    }
  }

  resetInput(): void {
    if (this.allBadWords) {
      this.newWord = '';
      this.allBadWords = [];
      this.BadWords = [];
      this.text = "";
    }
  }

  censorText(): void {
    if (this.text) {
      const additionalBadWords = this.listBadWords.split(' ');
      this.allBadWords = [...additionalBadWords, ...this.BadWords];

      // Заміна заборонених слів на зірочки в тексті
      const regex = new RegExp(`\\b(?:${this.allBadWords.join('|')})\\b`, 'gi');
      this.text = this.text.replace(regex, match => '*'.repeat(match.length));
      this.isText = true;
      this.placeholderTextarea = 'text here..';
    } else {
      this.placeholderTextarea = 'Please write a text!';
      this.isText = false;
    }
  }
}
