var reportIntent = require('./report/report-intent.json');
var reportDialogue = require('./report/report-dialogue.json');
var reportEngagement = require('./report/report-engagement.json');
var reportChatservice = require('./report/report-chatservice.json');
var account = require('./account/account.json');
var company = require('./company/company.json');

module.exports = function () {
    return {
        "intent-status-ui": reportIntent['intent-status-ui'],
        "intent-engage-by-channel": reportIntent['intent-engage-by-channel'],
        "top-10-intent-ui": reportIntent['top-10-intent-ui'],
        "intent-id-to-name": reportIntent['intent-id-to-name'],
        "topic-id-to-name": reportDialogue['topic-id-to-name'],
        "topic-name-to-id": reportDialogue['topic-name-to-id'],
        "dialogue-id-to-name": reportDialogue['dialogue-id-to-name'],
        "dialogue-status": reportDialogue['dialogue-status'],
        "overview": reportDialogue['overview'],
        "dialogue-by-topic": reportDialogue['dialogue-by-topic'],
        "topic-engagement": reportDialogue['topic-engagement'],
        "dialog-engagement": reportDialogue['dialog-engagement'],
        "top10-topic": reportDialogue['top10-topic'],
        "active-user": reportEngagement['active-user'],
        "user-engagement": reportEngagement['user-engagement'],
        "user-engagement-status": reportEngagement['user-engagement-status'],
        "day-of-week": reportEngagement['day-of-week'],
        "sentiment": reportEngagement['sentiment'],
        "active-users": reportEngagement['active-users'],
        "total-users": reportEngagement['total-users'],
        "total-message": reportEngagement['total-message'],
        "active-agent": reportEngagement['active-agent'],
        "social-network-id": reportEngagement['social-network-id'],
        "new-user": reportEngagement['new-user'],
        "social-network": reportEngagement['social-network'],
        "total-response-by-bot": reportChatservice['total-response-by-bot'],
        "response-time": reportChatservice['response-time'],
        "conversation-time": reportChatservice['conversation-time'],
        "nlu-response-time": reportChatservice['nlu-response-time'],
        "resolve-by-overview": reportChatservice['resolve-by-overview'],
        "nlu-request-status": reportChatservice['nlu-request-status'],
        "nlu-request-day-of-week": reportChatservice['nlu-request-day-of-week'],
        "role": account['role'],
        "company": account['mock-company'],
        "reverse-company": account['reverse-mock-company'],
        "reverse-role": account['reverse-mock-role'],
        "account": account['mock-account']['content'],
        "company-page": company['company']
    }
}