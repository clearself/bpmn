export const xmlStr =`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" targetNamespace="http://www.flowable.org/processdef">
  <process id="LeaveApplication" name="请假申请" isExecutable="true">
    <startEvent id="startNode1" name="开始">
      <outgoing>Flow_1i6ntl4</outgoing>
    </startEvent>
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_flow">
    <bpmndi:BPMNPlane id="BPMNPlane_flow" bpmnElement="LeaveApplication">
      <bpmndi:BPMNEdge id="Flow_1i6ntl4_di" bpmnElement="Flow_1i6ntl4">
        <di:waypoint x="225" y="215" />
        <di:waypoint x="320" y="215" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_101x41f_di" bpmnElement="Flow_101x41f">
        <di:waypoint x="420" y="215" />
        <di:waypoint x="515" y="215" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1oexhjd_di" bpmnElement="Flow_1oexhjd">
        <di:waypoint x="565" y="215" />
        <di:waypoint x="660" y="215" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0oidzit_di" bpmnElement="Flow_0oidzit">
        <di:waypoint x="760" y="215" />
        <di:waypoint x="855" y="215" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1mqv4d2_di" bpmnElement="Flow_1mqv4d2">
        <di:waypoint x="905" y="215" />
        <di:waypoint x="1002" y="215" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ms36c0_di" bpmnElement="Flow_0ms36c0">
        <di:waypoint x="540" y="240" />
        <di:waypoint x="540" y="400" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ubisbp_di" bpmnElement="Flow_0ubisbp">
        <di:waypoint x="880" y="240" />
        <di:waypoint x="880" y="440" />
        <di:waypoint x="590" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1n4cqa6_di" bpmnElement="Flow_1n4cqa6">
        <di:waypoint x="490" y="440" />
        <di:waypoint x="370" y="440" />
        <di:waypoint x="370" y="255" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Activity_0wi8psg_di" bpmnElement="Activity_02v0kq2">
        <omgdc:Bounds x="320" y="175" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_startNode1" bpmnElement="startNode1" bioc:stroke="">
        <omgdc:Bounds x="195" y="200" width="30" height="30" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="197" y="237" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1mdfbn1_di" bpmnElement="Gateway_1mdfbn1" isMarkerVisible="true">
        <omgdc:Bounds x="515" y="190" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_17nhy2b_di" bpmnElement="Activity_0pbabwd">
        <omgdc:Bounds x="660" y="175" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_01lgsw5_di" bpmnElement="Gateway_01lgsw5" isMarkerVisible="true">
        <omgdc:Bounds x="855" y="190" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1mqklz0_di" bpmnElement="Event_1mqklz0">
        <omgdc:Bounds x="1002" y="197" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="1009" y="240" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_183ksl7_di" bpmnElement="Activity_15gykiz">
        <omgdc:Bounds x="490" y="400" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
`